function draw(num){
    let str="";
    for(let col=0;col<num;col++){
        str+="*";

        for(let row=0;row<num-1;row++) {
            str+=" *";

        }
        str+="\n";
    }
    console.log(str);
}
draw(5);