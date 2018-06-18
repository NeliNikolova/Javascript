function rounding([num,sign]){
    [nun,sign]=[num,sign].map(Number);
    if(sign>15){
        sign=15;
    }

    console.log(Number(num.toFixed(sign)));
}
rounding([10.5, 3]);