function concatenate(arr){
    let newArr=[];
    let result="";
    for(let el of arr){
        result = el.split("").reverse().join("");
        newArr.unshift(result);
    }

    console.log(newArr.join(""));
}
concatenate(['I', 'am', 'student']);