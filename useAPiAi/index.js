import express from 'express'
import Send from './Ai/init.js'

const app = express()
app.use(express.json())

app.post("/api/v1", async(req, res) => {
    Send(req, res)
})

app.listen(3000, () => {
    console.log("server running on port 3000")
})