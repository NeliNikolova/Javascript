function solve(matrix){
    let min=Number.NEGATIVE_INFINITY;
    for(let row=0; row<matrix.length; row++){
        for (let col= 0; col < matrix[row].length; col++) {
            if(matrix[row][col]>min){
                min=matrix[row][col];
            }
        }
    }
console.log(min);
}
solve([[20, 50, 10], [8, 33, 145]]);
solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]);