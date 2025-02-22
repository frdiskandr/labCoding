// Soal 1

// function HitungTinggi(TinggiAwal, LamaHari, Pertumbuhan) {
//     let tinggi = TinggiAwal;

//     for (let i = 0; i < LamaHari; i++) {
//         tinggi += tinggi * Pertumbuhan;
//     }

//     return tinggi.toFixed(2);
// }

// console.log(HitungTinggi(200, 5, 0.05));
// console.log(HitungTinggi(250, 2, 0.02));

//soal 2

// const piramida = (n) => {
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n - i; j++) {
//             process.stdout.write(" ");
//         }
//         for (let k = 0; k < 2 * i + 1; k++) {
//             if (k == 0) {
//                 process.stdout.write("/");
//             }

//             if (k == 2 * i + 1 ) {
//                 process.stdout.write("\\");
//             }
//             process.stdout.write("*");
//         }
//         console.log();
//     }
// };

// piramida(3);
// piramida(5);

//soal 3

// function ManipulateString(Kata) {
//     let hasil = "";

//     for (let i = 0; i < Kata.length; i++) {
//         let huruf = Kata[i];

//         let sudahAda = false;
//         for (let j = 0; j < hasil.length; j++) {
//             if (hasil[j] === huruf) {
//                 sudahAda = true;
//                 break;
//             }
//         }

//         if (!sudahAda) {
//             hasil += huruf;
//         }
//     }

//     return hasil;
// }

// console.log(ManipulateString("Imagination"));
// console.log(ManipulateString("Association"));

//soal 4

// function Bill(HargaProduk) {
//     let totalHarga = 0;

//     for (let i = 0; i < HargaProduk.length; i++) {
//         totalHarga += HargaProduk[i];
//     }

//     let diskon = 0;
//     let bonus = "";

//     if (totalHarga > 400000) {
//         diskon = 0.1;
//         bonus = "Ransel";
//     } else if (totalHarga > 200000) {
//         diskon = 0.07;
//         bonus = "Payung";
//     } else if (totalHarga > 70000) {
//         diskon = 0.05;
//         bonus = "Topi";
//     }

//     let totalDiskon = totalHarga * diskon;
//     let hargaAkhir = totalHarga - totalDiskon;

//     console.log("Total Harga = " + totalHarga);
//     console.log("Diskon = " + totalDiskon);
//     console.log("Bonus = " + bonus);
//     console.log("Harga Akhir = " + hargaAkhir);
// }

// const PriceProduct = [20000, 50000, 100000];

// Bill(PriceProduct);

//soal 5

function solution(noAkun, nominal) {
    let totalDebit = 0;
    let totalKredit = 0;

    console.log("# Akun # Debit # Kredit");

    for (let i = 0; i < noAkun.length; i++) {
        let akun = noAkun[i];
        let amount = nominal[i];

        if (i % 2 === 0) {
            totalDebit += amount;
            console.log(akun + " - " + amount + " - 0");
        } else {
            totalKredit += amount;
            console.log(akun + " - 0 - " + amount);
        }
    }

    console.log("# Total # " + totalDebit + " # " + totalKredit);

    let status = totalDebit === totalKredit ? "Balance" : "Not Balance";
    console.log("Status = " + status);
}

const account1 = {
    noAkun: [111, 211, 201],
    nominal: [200000, 50000, 150000],
};

const account2 = {
    noAkun: [111, 201],
    nominal: [100000, 120000],
};

solution(account1.noAkun, account1.nominal);
console.log(" ");
solution(account2.noAkun, account2.nominal);
