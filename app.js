import express from 'express';
import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';
import bodyParser from 'body-parser';
import 'dotenv/config.js'
import cors from 'cors';


const app = express();

app.use(bodyParser.json())

app.use(cors({
    origin: process.env.CORS_ORIGIN,
}));

app.get("/", (req, res) => {
    res.send("hello");
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(3000);