function solve(rows,cols) {
    rows = Number(rows);
    cols = Number(cols);
    let matrix = [];
    let num = 1;
    for (let row = 0; row < rows; row++) {
        let row = [];
        for (let col = 0; col < cols; col++) {

            row.push(0);
        }
        matrix.push(row);
    }

    let index=0;
    let currentRow=0;
    let currentCol=0;
while(num<=9) {
    for (let ind = 0 ; ind < cols ; ind++) {
        matrix[currentRow][currentCol] = num;
        currentCol++;
        num++

    }
    currentRow++;

    for (let ind = currentRow + index; ind < rows - index; ind++) {
        matrix[currentRow][currentCol - 1] = num;
        currentRow++;
        num++

    }

    for (let ind =-- cols; ind >=1 ; ind--) {
        matrix[currentRow][currentCol] = num;
        currentCol--;
        num++

    }
    index++
}
    matrix.forEach(r=>console.log(r.join(" ")))
}
solve(3,3)