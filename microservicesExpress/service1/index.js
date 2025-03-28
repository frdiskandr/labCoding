import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send({status:200, message: "services 1"})
})

app.listen(3001, () => {
    console.log("services 1 running on http://localhost:3001");
})