function result() {
    let objType={};
    for (let i = 0; i < arguments.length; i++) {
        let arg = arguments[i];
        console.log(`${typeof arg} : ${arg}`);
    if(!objType.hasOwnProperty(typeof arg)){
        objType[typeof arg]=0;
    }
        objType[typeof arg]++;
    }

    let sortedObj = Object.keys(objType).sort(function(a,b){return objType[b]-objType[a]})

    for (let obj of sortedObj) {
        console.log(`${obj} = ${objType[obj]}`);
    }

}
result("cat", 42,205,"horse" ,function(){console.log("Hello, word!")})