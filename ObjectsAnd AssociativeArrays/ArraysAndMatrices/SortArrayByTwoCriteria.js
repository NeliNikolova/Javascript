function sort(arr){
    let result=[];

     result=arr.sort((a, b) => a> b);
    result= arr.sort((a, b) => a.length - b.length);
     console.log(result.join("\n"));
}

sort(["test","deni","neli"]);