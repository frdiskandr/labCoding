const matrix = [
    [1, 2, 0],
    [4, 5, 6],
    [7, 8, 9],
];

function Diagonal(matrix) {
    let diagonalPertama = 0;
    let diagonalKedua = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (j == i) {
                diagonalPertama += matrix[i][j];
            }

            if (i + j == matrix.length - 1) {
                diagonalKedua += matrix[i][j];
            }
        }
    }
    let result = diagonalPertama - diagonalKedua;
    console.log(result);
}

Diagonal(matrix);
