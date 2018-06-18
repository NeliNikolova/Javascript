function calculate(strArr){
    let map= new Map();
    for(let arrData of strArr){
        let arr = arrData.split(/\s+->\s+/);
        let city = arr[0];
        let product = arr[1];
        let income = arr[2].split(/\s+:\s+/).map(Number).reduce((a, b) => a *b);
        if(!map.has(city)){
            map.set(city,new Map());

        }
        if(!map.get(city).has(product)){
            map.get(city).set(product,income);
        }
        else{
            map.get(city).set(product, map.get(city).get(product) + income);
        }
    }
   for(let [key,value] of map){
        console.log(`Town - ${key}`);
       for(let [key1,value] of map.get(key)){
           console.log(`$$$${key1} : ${value}`);
       }
   }

}
calculate(["Sofia -> Laptops HP -> 200 : 2000", "Sofia -> Raspberry -> 200000 : 1500", "Sofia -> Audi Q7 -> 200 : 100000", "Montana -> Portokals -> 200000 : 1", "Montana -> Qgodas -> 20000 : 0.2", "Montana -> Chereshas -> 1000 : 0.3"]);