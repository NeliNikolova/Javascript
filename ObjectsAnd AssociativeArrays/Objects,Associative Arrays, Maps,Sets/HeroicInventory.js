function solve(data){
   let heroes=[];
   let items=[];
for(let heroArr of data){
   let heroData=heroArr.split(" / ");
   let heroName=heroData[0];
   let heroLevel=Number(heroData[1]);
   if(heroData.length>2){
      items=heroData[2].split(", ");
   }
   let hero={name:heroName,level:heroLevel,items:items};
         heroes.push(hero);
}
      console.log(JSON.stringify(heroes));
}
solve(["Isacc / 25 / Apple, GravityGun", "Derek / 12 / BarrelVest, DestructionSword", "Hes / 1 / Desolator, Sentinel, Antara"]);
solve(["Jake / 1000 / Gauss, HolidayGrenade"]);