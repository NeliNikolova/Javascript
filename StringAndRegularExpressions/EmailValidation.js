function emailValidation(email){
    let regex=/^[A-Za-z0-9]+@[a-z]+.[a-z]+$/g;
    let result=regex.test(email);
    if(result){
        console.log("Valid")
    }
    else{
        console.log("Invalid")
    }

}
emailValidation("invalid@emai.bg")