const matrix = [
    [1, 2, 3, 4, 5],
    [2, 1, 4, 5, 6],
    [3, 4, 1, 6, 7],
    [4, 5, 6, 1, 8],
    [5, 6, 7, 8, 1],
];

// sum of all elements below the main diagonal

// 1st otdlena promenliva counter ili 2nd s 2fora vtoriq do row, moje is sus splice/slice

let sum = 0;

for (let row = 0; row < matrix.length; row += 1) {
    for (let col = 0; col < row + 1; col += 1) {
        sum += matrix[row][col];
    }
}
console.log(sum);


// for (const row of matrix) {
//     for (const cell of row) {
//         sum += cell;
//     }
// }

// console.log(sum);

let sum = 0;

for (let row = 0; row < matrix.length; row += 1) {
    for (let col = row + 1; col < matrix[row].length + 1; col += 1) {
        sum += matrix[row][col];
    }
}
console.log(sum);


// -------------------------

// find the max number in a matrix

let maxNumber = matrix[0][0];

for (let row = 0; row < matrix.length; row += 1) {
    for (let col = 0; col < matrix[row].length; col += 1) {
        currentCell = matrix[row][col];
        maxNumber = Math.max(maxNumber, currentCell);
    }
}

console.log(maxNumber);
