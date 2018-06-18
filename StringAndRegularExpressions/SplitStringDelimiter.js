function solve(arr,delimiter){
    let result=arr.split(delimiter);
    console.log(result.join("\n"));
}
solve("One-Two-Three-Four","-");