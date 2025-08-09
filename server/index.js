import express from 'express';
import dotenv from 'dotenv';
import routes from './src/routes/converter.routes.js'
import cors from 'cors';

dotenv.config();

const app=express();
app.use(cors({
    origin: process.env.CLIENT_URL
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.get('/',(req,res)=>{
    res.send("Hello World");
})

app.use('/api',routes)


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})