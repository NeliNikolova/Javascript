function solve(strArr){
    let persons=new Map();
    for(let i=0; i<strArr.length; i++){
        if(strArr[i].length===1){
            if(!persons.has(strArr[i])){
            persons.set(strArr[i],new Set());
            }
        }
        if(strArr[i].length===3) {
            let [firstPerson, secondPerson] = strArr[i].split(/\s*-\s*/g);

            if(persons.has(firstPerson)&& persons.has(secondPerson)){
                persons.get(secondPerson).add(firstPerson);}

        }
    }

    let sortedLog = new Map([...persons.entries()].sort(function(firstEntry, secondEntry) {
        let firstEntryName = firstEntry[0];
        let firstEntrySubscribers = firstEntry[1].size;

        let secondEntryName = secondEntry[0];
        let secondEntrySubscribers = secondEntry[1].size;

        let result = secondEntrySubscribers - firstEntrySubscribers;

        if(result === 0) {
            let firstEntrySubscriptions = persons.get(firstEntryName).size;
            let secondEntrySubscriptions = persons.get(secondEntryName).size;

            result = secondEntrySubscriptions - firstEntrySubscriptions;
        }

        return result;
    }));

    let mostImportantPerson = [...sortedLog.entries()][0];
    console.log(mostImportantPerson[0]);

    let count = 1;
    mostImportantPerson[1].forEach(function(e){
        console.log(count + ". " + e);
        count++;
    });



    
}
solve(["A", "B", "C", "D", "A-B", "B-A", "C-A", "D-A"]);
solve(["C", "G", "P", "R", "J", "J-G", "G-J", "G-J", "R-P", "C-J"])