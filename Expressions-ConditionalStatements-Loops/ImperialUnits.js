function findFeets(inches){
    let feets=Math.floor(inches/12);
    let resultInches=inches-feets*12;
    console.log(`${feets}'-${resultInches}"`);
}
findFeets(55);