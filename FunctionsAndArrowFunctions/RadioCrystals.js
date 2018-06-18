function solve(arr){
    let arrNum=arr.map(Number);
    let target=arrNum[0];
    let current=0;
    for (let i = 1; i < arrNum.length; i++) {
         current= arrNum[i];
         let counter=0;
         console.log(`Processing chunk ${current} microns`);
         while(current/4>=target){
             current= cut(current);

             counter++;
         }
        if(counter !== 0) {
            console.log('Cut x' + counter);
            console.log('Transporting and washing');
            if (current === target) {
                console.log('Finished crystal ' + target + ' microns');
            }
            counter = 0;

        }
        current= wash(current);

        while(current*0.8>=target){
            current=laps(current);
            counter++;

        }
        if(counter !== 0) {
            console.log('Lap x' + counter);
            console.log('Transporting and washing');
            if (current === target) {
                console.log('Finished crystal ' + target + ' microns');
            }
            counter = 0;

        }
      current= wash(current);
         while(current-20>=target){
            current= grid(current);
            counter++;
         }
        if(counter !== 0) {
            console.log('Grind x' + counter);
            console.log('Transporting and washing');
            if (current === target) {
                console.log('Finished crystal ' + target + ' microns');
            }
            counter = 0;

        }
       current= wash(current);
         while(current-2>=target) {
           current= etch(current);

           counter++;
             if(current-target===1){
                 current= current-2;
                 counter++;

             }
         }

        if(counter !== 0) {
            console.log('Etch x' + counter);
            console.log('Transporting and washing');
            if (current === target) {
                console.log('Finished crystal ' + target + ' microns');
            }
            counter = 0;

        }
       current= wash(current);
        while(current<target){
            current=xRay(current);
            counter++;
        }
        if(counter !== 0) {
            console.log('X-ray x' + counter);
            if (current === target) {
                console.log('Finished crystal ' + target + ' microns');
            }
            counter = 0;

        }
         }
    function cut(num){return num=num/4}
    function laps(num){return num=num*0.8}
    function grid(num){return num=num-20}
    function etch(num){return num=num-2}
    function xRay(num){return num=num+1}
    function wash(num){return num=Math.floor(num)}
}
solve([1375, 50000])
solve([1000, 4000, 8100])