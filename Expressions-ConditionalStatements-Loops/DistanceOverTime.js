function findDistance(arr){
    let delta=0;
    for(let i=0; i<arr.length;i++) {
        let dist1 = arr[0] / 3.6 * arr[2];
        let dist2 = arr[1] / 3.6 * arr[2];
        delta = Math.abs(dist1 - dist2);
    }
    console.log(delta);
}
findDistance([0,60,3600]);