function solve(text){
     let html="<ul>\n";
    for (let arr of text) {
        html += "  <li>";
        arr = arr.replace(/&/gm, "&amp;")
            .replace(/</gm, "&lt;")
            .replace(/>/gm, "&gt;")
            .replace(/"/gm, "&quot;");

         html+=arr+"</li>\n";

    }
    html+="</ul>";
    console.log(html)
}
solve(['<b>unescaped text</b>', 'normal text'])