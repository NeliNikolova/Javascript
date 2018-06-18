function check(text,str){
    let n = text.indexOf(str);
    if(n===0) {
        console.log("true");
    }
    else {

        console.log("false");
    }
}
check("How have you been?","have");
check("The quick brown fox","The quick brown fox");