import app from "./app/web.js"

const port = 3000

app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`)
})