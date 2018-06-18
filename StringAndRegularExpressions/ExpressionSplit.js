function solve(arr){
    let pattern=/[\s,;().\\]+/g;
    let newA=arr.split(pattern);
    console.log(newA.join("\n"));

}

solve('let sum = 4 * 4,b = "wow";');