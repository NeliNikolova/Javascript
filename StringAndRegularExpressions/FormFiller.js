function solve(userName,email,telephone,text){
    let emailRegex=/<@[A-Za-z]+@>/g;
        let userNameRegex=/<![A-Za-z]+!>/g;
        let telephoneRegex=/<\+[A-Za-z]+\+>/g;
        text.forEach(str=>{
          str= str.replace(userNameRegex,userName);
          str= str.replace(emailRegex,email);
           str=str.replace(telephoneRegex,telephone);
            console.log(str);
        })


}
solve('Pesho',
    'pesho@softuni.bg',
    '90-60-90',
    ['Hello, <!username!>!',
        'Welcome to your Personal profile.',
        'Here you can modify your profile freely.',
        'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
        'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
        'Your current phone number is: <+number+>. Would you like to change that? (Y/N)'])