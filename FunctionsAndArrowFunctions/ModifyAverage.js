function solve(num){
    num=num.toString();
  let averageSum=0;

    for (let i=0; i<num.length; i++){
        averageSum+=(Number(num[i]))/num.length;


    }
    while(averageSum<=5){
        num+=9;
        averageSum+=9/ num.length++;

    }
console.log(num);
}
solve(101)