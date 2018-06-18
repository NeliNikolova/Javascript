function subSum(arr,startIndex,endIndex){

    let sum=0;
    if(!Array.isArray(arr)){
        return NaN;
    }
    if(startIndex<0){
        startIndex=0;
    }
    if(endIndex>arr.length-1){
        endIndex=arr.length-1;
    }

    if(startIndex>=0 && endIndex<arr.length){
        for (let i = startIndex; i <= endIndex; i++) {
            sum+=Number(arr[i]);

        }

    }
    return sum;
}