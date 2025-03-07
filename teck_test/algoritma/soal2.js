let str = "saya sangat senang mengerjakan soal algoritma";

function longest(str) {
    let arr = str.split(" ");
    let longest = 0;
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longest) {
            longest = arr[i].length;
            index = i;
        }
    }
    let result = `${arr[index]} : ${longest} character`;
    return result;
}

console.log(longest(str));
