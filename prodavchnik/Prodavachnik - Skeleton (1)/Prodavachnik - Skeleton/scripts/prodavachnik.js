function startApp() {
    //sessionStorage.clear();
    showHideMenuLinks();
    showView('viewHome');

    // Bind the navigation menu links
    $("#linkHome").click(showHomeView);
    $("#linkLogin").click(showLoginView);
    $("#linkRegister").click(showRegisterView);
    $("#linkListAds").click(listAdverts);
    $("#linkCreateAd").click(showCreateAdView);
    $("#linkLogout").click(logoutUser);

    // Bind the form submit buttons
    $("#buttonLoginUser").click(loginUser);
    $("#buttonRegisterUser").click(registerUser);
    $("#buttonCreateAd").click(createAdvert);
    $("#buttonEditAd").click(editAdvert);

    // Bind the info / error boxes
    $("#infoBox, #errorBox").click(function () {
        $(this).fadeOut();
    });

    // Attach AJAX "loading" event listener
    $(document).on({
        ajaxStart: function () {
            $("#loadingBox").show()
        },
        ajaxStop: function () {
            $("#loadingBox").hide()
        }
    });


    function showView(viewName) {
        // Hide all views and show the selected view only
        $('main > section').hide();
        $('#' + viewName).show();
    }

    function showHideMenuLinks() {
        $("#linkHome").show();
        if (sessionStorage.getItem('authToken') == null) {
            // No logged in user
            $("#linkLogin").show();
            $("#linkRegister").show();
            $("#linkListAds").hide();
            $("#linkCreateAd").hide();
            $("#linkLogout").hide();
            $('#loggedInUser').hide();

        } else {
            // We have logged in user
            $("#linkLogin").hide();
            $("#linkRegister").hide();
            $("#linkListAds").show();
            $("#linkCreateAd").show();
            $("#linkLogout").show();
            $('#loggedInUser').show();
        }
    }

    function showInfo(message) {
        $('#infoBox').text(message);
        $('#infoBox').show();
        setTimeout(function () {
            $('#infoBox').fadeOut();
        }, 3000);
    }

    function showError(errorMsg) {
        $('#errorBox').text("Error: " + errorMsg);
        $('#errorBox').show();
    }

    function handleAjaxError(response) {
        let errorMsg = JSON.stringify(response);
        if (response.readyState === 0)
            errorMsg = "Cannot connect due to network error.";
        if (response.responseJSON && response.responseJSON.description)
            errorMsg = response.responseJSON.description;
        showError(errorMsg);
    }

    function showHomeView() {
        showView('viewHome');
    }

    function showLoginView() {
        showView('viewLogin');
        $('#formLogin').trigger('reset');
    }

    function showRegisterView() {
        $('#formRegister').trigger('reset');
        showView('viewRegister');
    }

    function showCreateAdView() {
        $('#formCreateAd').trigger('reset');
        showView('viewCreateAd');
    }


    const BASE_URL = 'https://baas.kinvey.com/'
    const APP_KEY = 'kid_H1q5NPF9G'
    const APP_SECRET = 'ea77b943eef744a3a26e84cda3a2ba3a'
    const AUTH_HEADERS = {'Authorization': "Basic " + btoa(APP_KEY + ":" + APP_SECRET)}

    function loginUser() {
        let username = $('#formLogin input[name=username]').val()
        let password = $('#formLogin input[name=passwd]').val()
        $.ajax({
            method: 'POST',
            url: BASE_URL + 'user/' + APP_KEY + '/login',
            headers: AUTH_HEADERS,
            data: {username, password}
        }).then(function (res) {
            signInUser(res, 'Login successful.')
        }).catch(handleAjaxError)
    }

    function registerUser() {
        let username = $('#formRegister input[name=username]').val()
        let password = $('#formRegister input[name=passwd]').val()
        $.ajax({
            method: 'POST',
            url: BASE_URL + 'user/' + APP_KEY + '/',
            headers: AUTH_HEADERS,
            data: {username, password}
        }).then(function (res) {
            signInUser(res, 'Registration successful.')
        }).catch(handleAjaxError)
    }

    function signInUser(res, message) {
        sessionStorage.setItem('username', res.username)
        sessionStorage.setItem('authToken', res._kmd.authtoken)
        sessionStorage.setItem('userId', res._id);
        $('#loggedInUser').text("Welcome, " + res.username + "!")
        showHomeView()
        showHideMenuLinks()
        showInfo(message)
    }

    function logoutUser() {
        sessionStorage.clear()
        showHomeView();
        showHideMenuLinks();
        showInfo('Logout successful.')

    }

    function showInfo(message) {
        let infoBox = $('#infoBox')
        infoBox.text(message)
        infoBox.show()
        setTimeout(function () {
            $('#infoBox').fadeOut()
        }, 3000)
    }

    function listAdverts() {
        $('#ads').empty();
        showView('viewAds');
        $.ajax({
            method: "GET",
            url: BASE_URL + 'appdata/' + APP_KEY + '/adverts',
            headers: {'Authorization': "Kinvey " + sessionStorage.getItem('authToken')},
        }).then(function (adverts) {
            if (adverts.length === 0) {
                $('#ads').text('No advertisements available.');
            } else {
                let advertsTable = $('<table>')
                    .append($('<tr>').append(
                        '<th>Title</th>',
                        '<th>Description</th>',
                        '<th>Publisher</th>',
                        '<th>Date Published</th>',
                        '<th>Price</th>',
                        '<th>Actions</th>')
                    );

                for (let advert of adverts) {
                    let readMoreLink = $(`<a data-id="${advert._id}" href="#">[Read More]</a>`)
                        .click(function () {
                            displayAdvert($(this).attr("data-id"));
                        });
                    let links = [readMoreLink];

                    if (advert._acl.creator == sessionStorage['userId']) {
                        let deleteLink = $(`<a data-id="${advert._id}" href="#">[Delete]</a>`)
                            .click(function () {
                                deleteAdvert($(this).attr("data-id"))
                            });
                        let editLink = $(`<a data-id="${advert._id}" href="#">[Edit]</a>`)
                            .click(function () {
                                loadAdvertForEdit($(this).attr("data-id"))
                            });
                        links = [readMoreLink, ' ', deleteLink, ' ', editLink];
                    }

                    advertsTable.append($('<tr>').append(
                        $('<td>').text(advert.title),
                        $('<td>').text(advert.description),
                        $('<td>').text(advert.publisher),
                        $('<td>').text(advert.date),
                        $('<td>').text(advert.price),
                        $('<td>').append(links)
                    ));
                }

                $('#ads').append(advertsTable);
            }
        }).catch(handleAjaxError)

    }


    function createAdvert() {
        let title = $('#formCreateAd').find('input[name=title]').val()
        let description = $('#formCreateAd').find('textarea[name=description]').val()
        let date = $('#formCreateAd').find('input[name=datePublished]').val()
        let price = $('#formCreateAd').find('input[name=price]').val()
        let publisher = sessionStorage.getItem('username');
        let image = $('#formCreateAd input[name=image]').val()
        $.ajax({
            method: "POST",
            url: BASE_URL + 'appdata/' + APP_KEY + '/adverts',
            headers: {'Authorization': "Kinvey " + sessionStorage.getItem('authToken')},
            data: {title, description, date, price, publisher, image}
        }).then(function (res) {
            if (title.length === 0) {
                showError('Title cannot be empty');
                return;
            }
            if (Number.isNaN(price)) {
                showError('Price cannot be empty');
                return;
            }

            listAdverts()
            showInfo('Advert created.')
        }).catch(handleAjaxError)

    }

    function deleteAdvert(advertId) {
        $.ajax({
            method: 'DELETE',
            url: BASE_URL + 'appdata/' + APP_KEY + '/adverts/' + advertId,
            headers: {'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')}
        }).then(function () {
            listAdverts()
            showInfo('Advert deleted.')
        }).catch(handleAjaxError)
    }

    function loadAdvertForEdit(advertId) {
        $.ajax({
            method: 'GET',
            url: BASE_URL + 'appdata/' + APP_KEY + '/adverts/' + advertId,
            headers: {'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')}
        }).then(function (advert) {
            $('#formEditAd input[name=id]').val(advert._id);
            $('#formEditAd').find('input[name=title]').val(advert.title)
            $('#formEditAd').find('textarea[name=description]').val(advert.description)
            $('#formEditAd').find('input[name=datePublished]').val(advert.date)
            $('#formEditAd').find('input[name=price]').val(advert.price)
            $('#formEditAd input[name=image]').val(advert.image)
            showView('viewEditAd')

        }).catch(handleAjaxError)
    }

    function editAdvert() {
        //let id = $('#formEditAd input[name=id]').val()
        let advertData = {
            title: $('#formEditAd').find('input[name=title]').val(),
            description: $('#formEditAd').find('textarea[name=description]').val(),
            publisher: sessionStorage.getItem('username'),
            date: $('#formEditAd').find('input[name=datePublished]').val(),
            price: $('#formEditAd').find('input[name=price]').val(),
            image: $('#formEditAd').find('input[name=image]').val()
        }
        $.ajax({
            method: "PUT",
            url: BASE_URL + 'appdata/' + APP_KEY + '/adverts/' + $('#formEditAd').find('input[name=id]').val(),
            headers: {'Authorization': "Kinvey " + sessionStorage.getItem('authToken')},
            data: advertData
        }).then(function (res) {
            if (res.title.length === 0) {
                showError('Title cannot be empty');
                return;
            }
            if (Number.isNaN(res.price)) {
                showError('Price cannot be empty');
                return;
            }
            listAdverts()
            showInfo('Advert edited.')
        }).catch(handleAjaxError)
    }

    function displayAdvert(advertId) {
        $('#viewDetailsAd').empty()

        $.ajax({
            method: 'GET',
            url: BASE_URL + 'appdata/' + APP_KEY + '/adverts/' + advertId,
            headers: {
                'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken'),
                "Content-type": "application/json"
            }
        }).then(function (advert) {
            let advertInfo = $('<div>').append(
                $('<img>').attr("src", advert.image),
                $('<br>'),
                $('<label>').text('Title:'),
                $('<h1>').text(advert.title),
                $('<label>').text('Description:'),
                $('<p>').text(advert.description),
                $('<label>').text('Publisher:'),
                $('<div>').text(advert.publisher),
                $('<label>').text('Date:'),
                $('<div>').text(advert.date));

            $('#viewDetailsAd').append(advertInfo);

            showView('viewDetailsAd');

        }).catch(handleAjaxError)
    }
}