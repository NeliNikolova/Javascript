function solve(input){
    let inputArr=JSON.parse(input);
    let html= "<table>\n";
    html+="<tr>";
    for(let key of Object.keys(inputArr[0])){
        html+=`<th>${htmlEscape(key)}</th>`;
    }
    html+="</tr>\n";
    for (let obj of inputArr) {
        html += '   <tr>';
        for (let value of Object.keys(obj)) {
            html += '<td>' + htmlEscape(obj[value]) + '</td>'
        }
        html += '</tr>\n';
    }
     html+= "</table>\n";
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
solve('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]');
solve('[{"Name":"Pesho","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]');