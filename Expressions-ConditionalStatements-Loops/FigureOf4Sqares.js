function draw(n){
    n=Number(n);
    let length = n % 2 === 0 ? n - 1 : n;

        for (let i = 1; i <= length; i++) {
            if(i===1 || i===length || i===(length+1)/2){
            console.log("+" + "-".repeat(`${(2 * n - 4) / 2}`) + "+" + "-".repeat(`${(2 * n - 4) / 2}`) + "+");
        }

      else {
                console.log("|" + " ".repeat(`${(2 * n - 4) / 2}`) + "|" + " ".repeat(`${(2 * n - 4) / 2}`) + "|");
            }
        }
}
draw(7);