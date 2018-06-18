function find(text,word){
    let patternString = '\\b' + `${word}` + '\\b'
    let pattern = new RegExp(patternString, 'gi');
    let count = 0;
    let match;
    while (match = pattern.exec(text)) {
        count++;
    }
    console.log(count);
}
find("The waterfall was so high, that the child couldn’t see its peak.",
    "the");
find("How do you plan on achieving that? How? How can you even think of that?" ,"how");
find("There was one. Therefore I bought it. I wouldn’t buy it otherwise.", "there");