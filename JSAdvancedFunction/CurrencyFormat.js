function currencyFormatter(separator,symbol,symbolFirst,value){
    let result= Math.trunc(value)+separator;
    result+=value.toFixed(2).substr(-2,2);
    if(symbolFirst){
        return symbol+" "+value;
    }
    else{
        return  result+" "+symbol;
    }
    let formatter=getDollarFormatter(currencyFormatter)
    function getDollarFormatter(formatter){
        function dollarFormatter(value){
            return  formatter(",", "$", true, value)
        }
        return dollarFormatter;
    }
}