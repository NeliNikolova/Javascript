function calc(arr){
    console.log("Sum = "+arr.reduce((a,b) => Number(a)+ Number(b)));
    console.log("Min = "+ arr.reduce((a,b) => Math.min(a,b)));
    console.log("Max = "+ arr.reduce((a,b) => Math.max(a,b)));
    console.log("Product = "+ arr.reduce((a,b) => Number(a)* Number(b)));
    console.log("Join = "+ arr.reduce((a,b) => ""+a+b));
}
calc([2,3,10,5]);