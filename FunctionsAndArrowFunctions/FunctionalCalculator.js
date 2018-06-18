function calculate(input) {
    let operator = input[2];

    switch (operator) {
        case '+':
            console.log(Number(input[0]) + Number(input[1]));
            break;
        case '-':
            console.log(Number(input[0])-Number(input[1]));
            break;
        case '*':
            console.log(Number(input[0])*Number( input[1]));
            break;
        case '/':
            console.log(Number(input[0])/Number( input[1]));
            break;

    }

}
calculate([18, -1, '*']);