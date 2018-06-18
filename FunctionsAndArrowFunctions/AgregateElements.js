function agregate(arr){
    let sum=0;
    let dev=0;
    let concat="";
    for(let i=0; i<arr.length;i++){
        sum+=Number(arr[i]);
        dev+=Number(1/arr[i]);
        concat+=arr[i];
    }
    console.log(sum);
    console.log(dev);
    console.log(concat);
}
agregate([1,2,3]);