import express from "express";
import mysql from "mysql2";

const app = express();
const db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "1234",
    database: "learn",
});

db.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("db connected");
});

app.use(express.json());

app.get("/user", async (req, res) => {
    db.query("select * from Users", (err, result) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.status(200).send(result);
    });
});

app.post("/user", (req, res) => {
    db.query("insert into Users set ?", req.body, (err, result) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.status(200).send({message: "success add user"});
    });
})

app.listen(3000, () => {
    console.log("server running on port 3000");
});
