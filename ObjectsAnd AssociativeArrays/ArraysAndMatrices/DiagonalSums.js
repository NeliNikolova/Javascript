function solve(matrix){
    let mainSum=0;
    let secondarySum=0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if(matrix[col]===matrix[row]){
                mainSum+=matrix[row][col];
                secondarySum+=matrix[row][matrix.length-1-row];
            }

        }

    }
    console.log(mainSum+" "+secondarySum);


}
solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]])