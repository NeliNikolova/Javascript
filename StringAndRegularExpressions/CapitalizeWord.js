function capitalize(str){

      let result=str.split(" ");


    for(let i = 0 ; i < result.length ; i++){
        result[i] = result[i].charAt(0).toUpperCase()+ result[i].substr(1).toLowerCase();
    }
    console.log(result.join(" "));

}

capitalize("CapiTalize this words");