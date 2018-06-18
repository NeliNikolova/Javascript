let add=(function(){
    let sum=0;
   return function solve(number){
        sum+= number;
        solve.toString=function(){
           return sum;
        }
       return solve;
    }




})()







console.log(add(1)(6)(-3).toString());