function extract(arr){
    let result=[];
    let result1=[];
    result1.push(arr[0]);
   for(let i=0;i<arr.length;i++){

    if(arr[i]<arr[i+1]){
        result1.push(arr[i+1]);
    };

   }
    console.log(result1.join("\n"));
}
extract([20, 3,8,4,10,12,3,2])