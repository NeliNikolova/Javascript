function solve(input){
    let html= "<table>\n";
    html+="<tr><th>name</th><th>score</th></tr>\n";
    let inputArr=JSON.parse(input);
    for(let arr of inputArr){
        html+= `<tr><td>${htmlEscape(arr.name)}</td><td>${arr.score}</td></tr>\n`
    }
    html+="</table>";
    console.log(html);
    function htmlEscape(key) {
        let replaced = key.toString();
        replaced = replaced.split('&').join('&amp;');
        replaced = replaced.split('<').join('&lt;');
        replaced = replaced.split('>').join('&gt;');
        replaced = replaced.split('"').join('&quot;');
        replaced = replaced.split('\'').join('&#39;');

        return replaced;
    }

}
solve('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]');
solve('[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]');