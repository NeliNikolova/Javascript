function solve(commands){
    let commandProcessor=(function(){
        let result=[];
        return {
            add:newItem=>result.push(newItem),
            remove:item=>result=result.filter(e=>e!==item),
            print:()=>console.log(result.join(","))
        }

    })();
    for (let command of commands) {
       let [comm,val]=command.split(" ");
        commandProcessor[comm](val);
    }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);

