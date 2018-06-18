function makeCensor(text,arr){
    for(let word of arr){
        let censor="-".repeat(word.length);
        while(text.indexOf(word)>-1){
          text= text.replace(word,censor);
        }
    }
    return text;
}

console.log(makeCensor('roses are red, violets are blue', [', violets are', 'red']));