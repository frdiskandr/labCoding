const A = [
    [2, 4, 3],
    [1, 5, 3],
    [1, 2, 1],
];

const B = [
    [2, 2, 2],
    [1, 2, 1],
    [1, 2, 1],
];

function Add(a, b) {
    if (a.length == b.length) {
        if (a[0].length == b[0].length) {
            let result = [];
            for (let i = 0; i < a.length; i++) {
                for (let j = 0; j < a[0].length; j++) {
                    B[i][j] = a[i][j] + b[i][j];
                }
            }
            console.log(result);
        } else {
            console.log("kolom matrik tidak sama");
        }
    } else {
        console.log("baris matrik tidak sama");
    }
}
console.log(
    A[0].length !== B[0].length &&
        (A.length !== B.length || A.length == B.length)
);

Add(A, B);
console.log(B);
