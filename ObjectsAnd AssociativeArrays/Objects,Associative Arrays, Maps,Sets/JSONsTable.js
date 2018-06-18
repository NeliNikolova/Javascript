function printTable(strArr){

    let str=JSON.parse(strArr);
    let html="<table>\n";
  for(let arr of str){
      html+=" <tr>\n";
      html+=`    <td>${arr.name}</td>\n`;
      html+=`    <td>${arr.position}</td>\n`;
      html+=`    <td>${arr.salary}</td>\n`;
      html+=` </tr>\n`;
  }

    html+=" </table>";
    console.log(html);
}
printTable('[{"name":"Pesho","position":"Promenliva","salary":100000},{"name":"Teo","position":"Lecturer","salary":1000},{"name":"Georgi","position":"Lecturer","salary":1000}]');