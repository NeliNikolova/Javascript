function printBottle(strArr){

    let juice=new Map();
    let result=new Map();
    for(let data of strArr){
        let[fruit,quantity]=data.split(/\s*=>\s*/g);
        if(!juice.has(fruit)){
            juice.set(fruit,Number(quantity));
        }
  else{
            juice.set(fruit, juice.get(fruit) + Number(quantity))
        }
            if(juice.get(fruit)>=1000){
                let bottles=Math.floor(juice.get(fruit)/1000);
                result.set(fruit,bottles)}


    }

    for(let [fruit,bottles] of result){
        console.log(`${fruit} => ${bottles}`);
    }
}
   printBottle(["Orange => 2000", "Peach => 1432", "Banana => 450", "Peach => 600", "Strawberry => 549"]);
  printBottle(["Kiwi => 234",
"Pear => 2345",
"Watermelon => 3456",
"Kiwi => 4567",
"Pear => 5678",
"Watermelon => 6789"]);