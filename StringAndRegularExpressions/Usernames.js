function extractUsername(usersArr){
    let userDomain="";
    let domains=[];
    for(let user of usersArr){

        let userData=user.split("@");
        let usersFirsPart=userData[0]+".";
        let secondPart=userData[1].split(".");
        secondPart.forEach(p =>usersFirsPart+= p[0]);

        domains.push(usersFirsPart);
    }
    console.log(domains.join(", "));
}
extractUsername(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);
