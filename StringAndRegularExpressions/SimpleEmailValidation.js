function validate(email){
    let pattern=/^[A-za-z\d]+@[a-z]+(\.[a-z]+)+$/g;
  let result=pattern.test(email);
  if(result){
      console.log("Valid");
  }
  else{
      console.log("Invalid");
  }
}
validate("invalid@emai1.bg");