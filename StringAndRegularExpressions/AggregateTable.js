function agregateTable(input){
    let sum=0;
    let towns=[];
    for(let element of input){
       let townData=element.split('|');
       let town=townData[1].trim();
       let income=Number(townData[2].trim());
        towns.push(town);
       sum+=income;
    }
    console.log(towns.join(", "));
    console.log(sum);
}
agregateTable(['| Sofia           | 300', '| Veliko Tarnovo  | 500', '| Yambol          | 275']);