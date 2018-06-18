function printPopulation(strArr){
    let cityArr=new Map();
    for(arr of strArr){
        let [city,pop]=arr.split(/\s*<->\s*/g);
        if(!cityArr.has(city)){
            cityArr.set(city,Number(pop));
        }
        else{
            cityArr.set(city,cityArr.get(city)+Number(pop ));
        }
    }
    for(let [key,value] of cityArr){
        console.log(`${key} : ${value}`)
    }

}
printPopulation(["Sofia <-> 1200000", "Montana <-> 20000", "New York <-> 10000000", "Washington <-> 2345000", "Las Vegas <-> 1000000"]);
printPopulation(["Istanbul <-> 100000", "Honk Kong <-> 2100004", "Jerusalem <-> 2352344", "Mexico City <-> 23401925", "Istanbul <-> 1000"]);