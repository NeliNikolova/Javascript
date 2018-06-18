function match(arr){
    let pattern=/^([A-Z][a-z]*) - ([1-9][0-9]*) - ([A-Za-z0-9-]+)$/g;
    let match;
    for(let a of arr){
        while(match=pattern.exec(a)){
            console.log(`Name: ${match[1]}\n`+
`Position: ${match[3]}\n`+
`Salary: ${match[2]}`);
        }
    }

}
match(["Isacc - 1000 - CEO","Ivan - 500 - Employee","Peter - 500 - Employee"]);