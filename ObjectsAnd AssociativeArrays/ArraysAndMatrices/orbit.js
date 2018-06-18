function solve(strArr){
    let[rows,cols,x,y]=strArr.map(Number);
    let matrix=[];

    for (let row = 0; row < rows; row++) {
        let row=[];
        for (let col = 0; col < cols; col++) {

            row.push(0);
        }
        matrix.push(row);
    }
    for(let row = 0; row< rows; row++) {
        for(let col=0; col<cols; col++) {
            matrix[row][col] = Math.max(Math.abs(row - x), Math.abs(col - y)) + 1;
        }
    }
    console.log(matrix.map(row => row.join(" ")).join("\n"));
}
solve([4,4,0,0])