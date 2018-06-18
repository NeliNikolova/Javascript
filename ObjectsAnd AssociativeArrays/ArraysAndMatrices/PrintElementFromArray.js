function print(arr){
    let num=Number(arr[arr.length-1]);
    for(let i=0;i<arr.length-1;i+=num){
        console.log(arr[i]);

    }
}
print(['dsa','asd','test','tset',2]);