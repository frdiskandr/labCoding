import fs from "fs";

const res = fs.readFileSync("data.json", "utf-8");

console.log(JSON.parse(res));
