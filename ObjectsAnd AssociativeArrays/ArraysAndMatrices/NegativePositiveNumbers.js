function solve(arr){
    let arr1=[];
    for(let i=0;i<arr.length; i++){
        if(arr[i]<0){
            arr1.unshift(arr[i]);
        }
        else{
            arr1.push(arr[i]);
        }
    }
    for(let i=0;i<arr1.length; i++){
    console.log(arr1[i]);}
}
solve([3, -2, 0, -1]);