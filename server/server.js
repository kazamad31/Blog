import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import DB from './db/connection.js';
import userSchema from './Model/userSchema.js';
import router from './Routes/auth.js';
import cookieParser from 'cookie-parser';
import authenticate from './Middleware/authentication.js';



const app= express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin: 'http://localhost:3000/',
    credentials: true
}));
app.use(cookieParser());
app.use(router);
app.use(express.static('uploads'));
app.use(authenticate);
dotenv.config({path:'./config.env'});
const PORT= process.env.PORT;

app.get('/', (req, res)=>{
    res.send("Hello world from the server")
});
app.listen(PORT,()=>{console.log("Server is running at port no 5000")});