
import express from 'express';
import bodyParser from 'body-parser';
import usersRouter from './routes/users.js';
const app = express();

app.use(bodyParser.json());
app.use('/users', usersRouter);

app.get('/', (req, res) => {
    res.send("hello from main page");
})




app.listen(3000, () => {
    console.log("listening...");
})