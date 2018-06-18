function solve(arrM){
    let arr = arrM.map(row => row.split(" ").map(Number));
    let sumMainDiagonal=0;
    let sumSecondaryDiagonal=0;
    for (let row = 0; row < arr.length; row++) {

           sumMainDiagonal+=arr[row][row];
        sumSecondaryDiagonal+=arr[arr.length-1-row][arr.length-1-row];
    }
    if(sumSecondaryDiagonal===sumMainDiagonal){
        for (let row = 0; row < arr.length; row++) {
            for (let col = 0; col < arr.length; col++) {
                if(row == col || row+col+1 == arr.length){
                    continue;
                }
                    arr[row][col] = sumMainDiagonal;
                }
            }

        }

    console.log(arr.map(row => row.join(" ")).join("\n"));
}

solve(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);