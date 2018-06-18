function solve(commandsArr){
  let map=new Map();
    let carMaker= {
        create: function ([name, inherits, parent]) {
         parent=parent?map.get(parent):null;
         let newObj=Object.create(parent);
         map.set(name,newObj);
         return newObj;
        },
        set:function([name,property,value]){
            let obj = map.get(name);
            obj[property] = value;
        },
        print:function([name]){
            let obj = map.get(name);
            let allProperties = []
            for (let key in obj) {
                allProperties.push(`${key}:${obj[key]}`);
            }
                console.log(allProperties.join(', '))

        }



    };

    for(let cmd of commandsArr){
        let tokens = cmd.split(' ');
        let action = tokens.shift();
        carMaker[action](tokens);
    }

}
solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
)