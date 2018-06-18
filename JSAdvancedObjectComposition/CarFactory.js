function solve(inputCar) {
    let modifiedCar = {};
    modifiedCar.model = inputCar.model;
    let engine;
    if (inputCar.power <= 90) {
        engine = {
            power: 90,
            volume: 1800
        }
    }
    else if (inputCar.power <= 120){
        engine = {
            power: 120,
            volume: 2400
        }
    }
    else if (inputCar.power <= 200) {
        engine = {
            power: 200,
            volume: 3500
        }
    }
    modifiedCar.engine = engine;
    modifiedCar.carriage = {
        type: inputCar.carriage,
        color: inputCar.color
    }

    let wheels=[];
    if(inputCar.wheelsize%2==0){
       inputCar.wheelsize-=1;
    }
    wheels=[inputCar.wheelsize,inputCar.wheelsize,inputCar.wheelsize,inputCar.wheelsize];
    modifiedCar.wheels=wheels;
    return modifiedCar;
}

console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));
