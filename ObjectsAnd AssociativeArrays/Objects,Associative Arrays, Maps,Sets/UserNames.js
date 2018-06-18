function solve(arrStr){
    let userNames=new Set();

    for (let user of arrStr) {
        userNames.add(user);

    }
   console.log([...userNames].sort(compare).join("\n"))
    function compare(a,b) {
        if (a.length < b.length) {
            return -1;
        }
        if (a.length > b.length) {
            return 1;
        }

        return a.localeCompare(b);
    }


}
solve(["Ashton",
"Kutcher",
"Ariel",
"Lilly",
"Keyden",
"Aizen",
"Billy",
"Braston"])