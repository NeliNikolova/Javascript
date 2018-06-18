function assign(arr){
    let arr1={};
    for (let i=0;i<arr.length;i+=2){
        arr1[arr[i]]=arr[i+1];

    }
    console.log(arr1);
}
assign(['name', 'Pesho', 'age', '23', 'gender', 'male']);