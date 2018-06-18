function solve(commands){
  let commandProcessor=(function(){
      let text="";
      return{
          append:(newText )=>text+=newText,
          removeStart:(count)=>text=text.slice(count),
          removeEnd:(count)=>text=text.slice(0,text.length-count),
          print:()=>console.log(text)

      }
  })()
    for (let command of commands) {
        let[cmd,val]=command.split(" ");
        commandProcessor[cmd](val);
    }
}
solve(['append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print']);