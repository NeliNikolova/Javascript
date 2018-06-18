(function(){
    let id=0;
    return class Extensible{
        constructor(){
            this.id=id++;
        }
        extend(template){
            for (let key in template) {
                if(template.hasOwnProperty(key)){
                    let element=template[key];
                    if (typeof element==="function"){
                        Extensible.prototype[key]=element;
                    }
                    else{
                        this[key]=element;
                    }
                }
            }
        }
    }
})()