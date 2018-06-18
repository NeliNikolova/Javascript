function draw(strArr){

let xml='<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<quiz>\n';
    for( let i = 0; i < strArr.length; i += 2){
        let question = strArr[i];
        let answer = strArr[i + 1];
        xml += `    <question>\n      ${question}\n   </question>\n`;
        xml += `    <answer>\n      ${answer}\n   </answer>\n`;
    }
    xml += '</quiz>';
console.log(xml);
}
draw(["Who was the forty-second president of the U.S.A.?", "William Jefferson Clinton"]);