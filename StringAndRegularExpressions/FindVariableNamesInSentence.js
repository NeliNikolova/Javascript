function find(str){
    let pattern=/(_)([A-Za-z0-9]+)/g;
    let matches = [];
    let match;
    while (match = pattern.exec(str)) {
        matches.push(match[2]);
    }
    return (matches.join(','));

}

console.log(find("Calculate the _area of the _perfectRectangle object."));