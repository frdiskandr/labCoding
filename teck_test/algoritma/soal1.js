let kata = "NEGIE12";

function reverseString(kata) {
    pool = kata.split("").reverse();
    for (let i = 0; i < kata.length; i++) {
        isNumber = Number(kata[i]);
        if (Number.isInteger(isNumber)) {
            pool.push(kata[i]);
            pool.splice(0, kata[i].length);
        }
    }
    pool.reverse();
    pool.reverse();

    kata = pool.join("");
    console.log(kata);
}

reverseString(kata);
