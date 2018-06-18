function findDistance(arr){
    let distance=0;
    for(let i=0; i<arr.length;i++){
        let x1=arr[0];
        let x2=arr[1];
        let x3=arr[2];
        let y1=arr[3];
        let y2=arr[4];
        let y3=arr[5];
       distance= Math.sqrt((x1-y1)*(x1-y1)+(x2-y2)*(x2-y2)+(x3-y3)*(x3-y3));
    }
    console.log(distance);
}
findDistance(1, 1, 0, 5, 4, 0);