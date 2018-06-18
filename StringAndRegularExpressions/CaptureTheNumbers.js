function capture(arr){
    let pattern=/[0-9]+/g;
    let match;
    let data=[];
    for(let a of arr){
        while(match=pattern.exec(a)){
            data.push(match);
        }
    }
    console.log(data.join(' '));
}
capture(["123The300", "3rd  movie"]);