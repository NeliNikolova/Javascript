function printBill(arr){
    let products=[];
    let prices=[];
    let sum=0;
    for(let i=0; i<arr.length; i++){
         if(i%2===0){
             products.push(arr[i]);
         }
         else{
             prices.push(arr[i]);
         }
    }
    for(let i=0; i<prices.length; i++){
        sum+=Number(prices[i]);
    }

  console.log("You purchased "+products.join(", ") +" for a total sum of "+ sum);

}

printBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']);

function print(arr){
    let products=arr.filter((x,i)=>i%2===0);
    let sum=arr.filter((x,i)=>i%2===1).map(Number).reduce((a,b)=>a+b);
    console.log(`You purchased ${products.join(", ")} for a total sum of ${sum}`);
}