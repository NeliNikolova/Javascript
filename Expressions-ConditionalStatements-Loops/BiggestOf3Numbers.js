function findBiggest(arr){
     arr=arr.map(Number);
    let bigNum=0;
    let controlNum=0;

    for(let i=0;i<arr.length;i++){
        if(arr[i]<=arr[i+1]){
            bigNum=arr[i+1];

        }
        else {
            controlNum= arr[i];
        }
       if(controlNum>bigNum){
            bigNum=controlNum;
       }
    }
    console.log(bigNum);
}
findBiggest([130,5,99]);

function find(arr){
    let num1=arr[0];
    let num2=arr[1];
    let num3=arr[2];
    let maxNum=Math.max(num1,num2,num3);
    console.log(maxNum);

}