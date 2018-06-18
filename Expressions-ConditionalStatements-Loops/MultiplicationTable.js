function multiplicationTable(n) {
    let html = "<table border = '1'>";
    let header = "<tr><th>x</th>";
    for(let i = 1; i <= n;i++) {
        header += "<th>" + i + "</th>";
    }
    let table = '';
    for(let i = 1; i <= n;i++) {
        table += "<tr><th>" + i + "</th>";
        for(let j = 1; j <=n;j++) {
            table += "<td>" + (i*j) + "</td>";
        }
        table += "</tr>";
    }
    header += "<tr>";
    html += header;
    html += table;
    html += "</table>";
    console.log(html);

}