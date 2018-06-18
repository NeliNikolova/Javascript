function solve(num){
    num=Number(num);
    let str="ATCGTTAGGG";
   for (let i=0; i<(num%4); i++){
       let a=str[i];
       let b=str[i+1];

              console.log("**" + `${str[i]}` + `${str[i + 1]}` + "**");
              console.log("*" + `${str[i]}`+"--" + `${str[i + 1]}` + "*");
              console.log(`${str[i]}` +"----" +`${str[i + 1]}`);
              console.log("*" + `${str[i]}`+"--" + `${str[i + 1]}` + "*");

   }

}
  solve(10);