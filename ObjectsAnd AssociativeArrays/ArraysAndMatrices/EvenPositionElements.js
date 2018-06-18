function findEven(arr){
    let arr1=[];
    for(let i=0;i<arr.length;i++ ){
        if(i==0 || i%2==0) {
            arr1.push(arr[i]);
        }

    }
    let result=arr1.join(" ");
    console.log(result);
}
findEven(['20', '30', '40']);