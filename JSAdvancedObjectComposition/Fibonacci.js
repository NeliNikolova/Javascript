function printFibonacci(n) {
    let fib = (() => {
 let f1=0;
 let f2=1;
 return ()=>{
     let f3;
     f3=f1+f2;
     f1=f2;
     f2=f3;
     return f2;
 }
    })()
    let fibNumbers = [];
    for(let i=1; i<=n; i++){
        fibNumbers.push(fib());
    }

    return fibNumbers
}
