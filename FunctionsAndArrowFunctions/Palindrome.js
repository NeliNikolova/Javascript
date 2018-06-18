function findPalindrome(str){
 for(let i=0;i<str.length;i++){
    if(str[i]===str[str.length-1-i]){
        console.log("true");
        return;
    }
    else {
        console.log("false");
        return;
    }
}
}
findPalindrome("haha");