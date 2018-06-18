function sumTowns(inputArr){
    let obj={};
    for (let i=0; i<inputArr.length; i+=2){
        let [town,income] = [inputArr[i],Number(inputArr[i+1])];
           if(obj[town]===undefined){
               obj[town]=income;
           }
           else{
               obj[town]+=income;
           }
    }

console.log(JSON.stringify(obj));

}
sumTowns(["Sofia","20","Varna", "3", "Sofia", "5", "Varna","4"]);