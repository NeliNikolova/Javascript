function draw(num){
    let str="";
    for(let row=0;row<num; row++){
        str+="*";
        for(let col=0;col<row;col++){
            str+="*";
        }
        str += '\n';
    }

    for(let row=num-2;row>=0; row--){
        str+="*";
        for(let col=0;col<row;col++){
            str+="*";
        }
        str += '\n';
    }
    console.log(str);
}
draw(2);
