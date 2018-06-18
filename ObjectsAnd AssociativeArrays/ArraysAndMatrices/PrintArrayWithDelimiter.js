function putDelimiter(arr){
    let delimiter=arr[arr.length-1];
    arr.pop();
    console.log(arr.join(`${delimiter}`));
}
putDelimiter([One,Two,Three,Four,Five,'-']);