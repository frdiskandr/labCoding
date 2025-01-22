import express from 'express';
import product from './route/route.js';

const app = express();

app.use(express.json());
app.use('/api', product);


app.get('/', (req, res) => {
    res.json({ message: 'Hello World', status:200 });
});

app.listen(5000, () => {
    console.log("server runing on port 5000")
});

export {app};