import express from "express";
import * as dotenv from 'dotenv';
import cors from 'cors';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();
console.log("OPENAI_API_KEY");
console.log(process.env.OPENAI_API_KEY);

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const app = express();
const port = 9000;

app.use("/",(req, res)=>{
    res.json({message: "Hello From Express App"})
})

app.listen(port, ()=>{
    console.log(`Starting Server on port: ${port} `);
})