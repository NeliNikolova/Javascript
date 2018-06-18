function validate(){
    $('#company').on('change', showHideCompany);
    $("#submit").on('click',function(ev){
        ev.preventDefault();
        let usernameRegex=/^[A-Za-z0-9]{3,20}$/;
        let passwordRegex=/^[A-Za-z0-9_]{5,15}$/;
        let confirmPasswordRegex=/^[A-Za-z0-9_]{5,15}$/;
        let emailRegex=/^@.*\.$/;
        let companyNumberRegex=/^[1-9]{1}[0-9]{3}$/;
         let isValid=true;
         if(usernameRegex.test($('#username').val())){
             $('#username').css('border','none');
         }
         else{
             $('#username').css('border-color','red');
             isValid=false;
         }
        if(passwordRegex.test($('#password').val())){
            $('#password').css('border','none');
        }
        else{
            $('#password').css('border-color','red');
            isValid=false;
        }
        if($('#confirm-password').val().match(passwordRegex) && $('#confirm-password').val().localeCompare($('#password').val()) == 0){
            $('#confirm-password').css('border', 'none');
        } else {
            $('#confirm-password').css('border-color', 'red');
            isValid = false;
        }
        if(emailRegex.test($('#email').val())){
            $('#email').css('border','none');
        }
        else{
            $('#email').css('border-color','red');
            isValid=false;
        }
        if($('#company').is(':checked')){
            if($('#companyNumber').val().match(companyNumberRegex)){
                $('#companyNumber').css('border', 'none');
            } else {
                $('#companyNumber').css('border-color', 'red');
                isValid = false;
            }
        }
        if(isValid){
            $('#valid').css('display', 'block');
        } else {
            $('#valid').css('display', 'none');
        }
        function showHideCompany() {
            if($(this).is(':checked')){
                $('#companyInfo').css('display', 'block');
            } else {
                $('#companyInfo').css('display', 'none')
            }
        }
    })


}