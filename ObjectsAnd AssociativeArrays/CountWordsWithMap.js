function countWords(input){
    let myMap = new Map();
    for (let words of input) {
    let wordsArr = words.split(/\W+/g).filter(w => w !== "");
        for (let word of wordsArr) {
            word=word.toLowerCase();
            if (!myMap.has(word)) {
                myMap.set(word, 1);
            }
            else {
                myMap.set(word, myMap.get(word) + 1);
            }
        }

    }
    let sortedMap = Array.from(myMap.keys()).sort((a,b)=>a.localeCompare(b));
    for (let key of sortedMap) {
        console.log(`'${key}' -> ${myMap.get(key)} times`)
    }
}

countWords(["Far too slow, you're far too slow."]);