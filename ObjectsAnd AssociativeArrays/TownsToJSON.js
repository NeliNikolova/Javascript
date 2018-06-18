function print(input){
    let arrays=input.slice(1);
    let townObj=[];
    for (let arr of arrays ){
        let [empty,town,latitude,longitude]=arr.split(/\s*\|\s*/g);
        let towns={Town:town,Latitude:Number(latitude),Longitude:Number(longitude)};
        townObj.push(towns);
    }
    console.log(JSON.stringify(townObj));
}
print(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);