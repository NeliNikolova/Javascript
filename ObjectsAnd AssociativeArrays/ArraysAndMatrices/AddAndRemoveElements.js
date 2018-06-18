function solve(arr){
    let result=[];
    let num=0;
    for(let i=0;i<arr.length; i++ ){
        if(arr[i]==="add"){
            num++;
            result.push(num);
        }
        else if(arr[i]==="remove"){
            num++;
               result.pop();
        }
    }
    if(result.length===0){
        console.log("Empty");
        return;
    }
    console.log(result.join("\n"));
}
solve(['add','add','remove','add','add']);
solve(['remove','remove','remove']);