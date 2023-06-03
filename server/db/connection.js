import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({path:'./config.env'});
const url=process.env.DATABASE;

const DB= mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log(`Database successfully connected`);
}).catch((err)=>{
    console.log(`${err}Connection not established`);
});
export default DB;