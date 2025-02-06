import fs from "fs";

const simpan = (data) =>
    fs.writeFileSync("./test.json", JSON.stringify(data), (err) => {
        if (err) throw err;
        console.log("saved");
    });

const baca = () => JSON.parse(fs.readFileSync("./test.json"));

const data = [
    {
        client: 1000,
        server: "indoglory.co",
    },
];

simpan(data);
console.log(baca());