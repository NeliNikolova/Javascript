function solve([speed,zone]){

      speed=Number(speed);
      let result=speed-getZone(zone);
    if(result <= 0) {
        return " ";}
     else if(result > 0 && result <= 20){
        return "speeding";
    } else if(result > 20 && result <= 40) {
        return "excessive speeding";
    } else {
        return "reckless driving";
    }

    function getZone(zone){
        switch(zone){
            case "city":return 50;
            case "interstate":return 90;
            case "motorway":return 130;
            case "residential":return 20;
        }
    }
}

console.log(solve([40, 'city']));