function toUpper(str){
    str=str.toUpperCase();
    let pattern=/\W+\s*/g;
    let result=str.split(pattern).filter(w => w != '');
    console.log(result.join(", "));

}
toUpper('Hi, how are you?');