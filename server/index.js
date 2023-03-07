import express  from "express";
import bodyParser  from "body-parser";
import usersRouter from "./router/users.js";
import cors from 'cors';

const app = express();

const PORT = process.env.PORT || 5500;   

app.use(bodyParser.json());
app.use(cors());
app.use('/users', usersRouter);

app.get('/', (req, res) => res.send('Hellow from server!'))

app.listen(PORT, ()=> {console.log(`Server is running on port: http://localhost:${PORT}`)});