import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import DB from './db/connection.js';
import userSchema from './Model/userSchema.js';
import router from './Routes/auth.js';
import authenticate from './Middleware/authentication.js';




const app= express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin: ['http://localhost:3000','https://www.technomanish.com','https://mernbymanish.onrender.com'],
    credentials: true,
    optionSuccessStatus: 200,
    Headers: true,
    exposedHeaders: 'Set-Cookie',
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: [ 'Access-Control-Allow-Origin', 'Content-Type','Authorization']
}));
app.use(router);

app.use(express.static('uploads'));
app.use(authenticate);
dotenv.config({path:'./config.env'});
const PORT= process.env.PORT || 5000;

app.get('/', (req, res)=>{
    res.send("Hello world from the server")
});
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
app.listen(PORT,()=>{console.log("Server is running at port no 5000")});