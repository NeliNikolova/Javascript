function attachEvents(){

let source=$('#towns-template').html();
let template=Handlebars.compile(source);
let context={
    name:"Ivan"
}
let html=template(context)
}