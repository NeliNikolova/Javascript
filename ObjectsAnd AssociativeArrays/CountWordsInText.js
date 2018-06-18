function countWords([input]){
    let wordsArr = input.split(/\W+/).filter(w => w != "");
    let obj = {};
    for(let word of wordsArr) {
        if(! obj.hasOwnProperty(word)) {
            obj[word] = 1;
        } else {
            obj[word]++;
        }
    }

    console.log(JSON.stringify(obj));
}
countWords(["Far too slow, you're far too slow."]);