function findUnique(arrNum){
    let myMap= new Map();
    for (let arr of arrNum) {
        let result=JSON.parse(arr).map(Number).sort((a,b)=>b-a);
        let resultArr = `[${result.join(', ')}]`;
        if(!myMap.has(resultArr)){
            myMap.set(resultArr,result.length)
        }
    }

    console.log([...myMap.keys()].sort((a,b)=>myMap.get(a)-myMap.get(b)).join("\n"))
}
findUnique(["[-3, -2, -1, 0, 1, 2, 3, 4]", "[10, 1, -17, 0, 2, 13]", "[4, -3, 3, -2, 2, -1, 1, 0]"])