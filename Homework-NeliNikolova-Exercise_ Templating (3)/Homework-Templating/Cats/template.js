$(() => {
    renderCatTemplate();

    function renderCatTemplate() {
        let source = $('#cat-template').html();
        let template = Handlebars.compile(source);
        $("#allCats").html(template(cats))
        $("button").click((ev)=> {
          let target= $(ev.target)
            let div=target.next()
             if(target.text().includes("Show")){
              target.text("Hide")
             }
             else{
                 target.text("Show")
             }
            div.toggle()
        })

    }




})
