import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send({ status: 200, message: "endpoint server microservices express" });
});

app.get("/service1", async (req, res) => {
    axios.get("http://localhost:3001").then((result) => {
        res.status(200).send(result.data);
    }).catch((err) => {
        res.status(500).send(err);
    })
});

app.get("/service2", async (req, res) => {
    axios.get("http://localhost:3002").then((result) => {
        res.status(200).send(result.data);
    }).catch((err) => {
        res.status(500).send(err);
    })
});

app.listen(5000, () => {
    console.log("server running on http://localhost:5000");
});
