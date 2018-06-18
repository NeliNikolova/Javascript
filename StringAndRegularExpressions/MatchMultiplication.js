function solve(str){
    let regex=/(-?[0-9]+)\s*\*\s*(-?[0-9]\.[0-9]+)/g;
    str= str.replace(regex,(match,num1, num2)=>num1*num2)
    console.log(str)
}
solve("My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit")
