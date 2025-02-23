function Relu(x) {
    if (x <= 0) {
        return 0;
    }
    return x;
}

let data = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10, 10, 3, 1, 3, 0, 0, 0, -2];
let newData = [];

for (let i = 0; i < data.length; i++) {
    newData[i] = Relu(data[i]);
}

console.log(newData.sort());