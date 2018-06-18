function matchWords(str){
    let newStr=str.match(/[A-Za-z0-9_]+/g);
    console.log(newStr.join("|"))
}
matchWords('A Regular Expression needs to have the global flag in order to match all occurrences in the text')