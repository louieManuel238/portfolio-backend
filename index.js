import express from "express";
import cors from 'cors';
import 'dotenv/config';
import userRoute from'./routes/user.js';
import workRoute from './routes/work.js';

const VALID_API_KEYS = [process.env.API_KEY];
const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());
app.use(express.json())
app.use(express.static("public"));

const validateKeys = (req, res, next) => {
    const apiKey = req.query.api_key;
    
   if (!apiKey || !VALID_API_KEYS.includes(apiKey)) {
        return res.status(401).json({error:"Please Provide A Valid API KEY"});
    }
    next();
}

app.use('/user', userRoute);
app.use('/works', workRoute);
app.use('/skill', skillRoute);
app.get("/",(_req,res)=>{
    res.send("API for PERSONAL WEBSITE")
})
app.listen("8080",()=>console.log(`Listening to localhost:${PORT}`));