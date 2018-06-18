function printCars(strArr){
    let map= new Map();
  for(let str of strArr){
    let cars=str.split(/\s*\|\s*/g);
    let carName=cars[0];
    let model=cars[1];
    let producedCars=Number(cars[2]);
    if(!map.has(carName)){
        map.set(carName,new Map());
    }
    if(!map.get(carName).has(model)){
        map.get(carName).set(model,producedCars);
    }
    else{
        map.get(carName).set(model,map.get(carName).get(model)+producedCars);
    }

}
    for(let[car,model] of map){
      console.log(`${car}`);
      for(let[modelCar,price] of model){
          console.log(`###${modelCar} -> ${price}`);
      }
    }
}
printCars(["Audi | Q7 | 1000",
"Audi | Q6 | 100",
"BMW | X5 | 1000",
"BMW | X6 | 100",
"Citroen | C4 | 123",
"Volga | GAZ-24 | 1000000",
"Lada | Niva | 1000000",
"Lada | Jigula | 1000000",
"Citroen | C4 | 22",
"Citroen | C5 | 10"]);