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
app.use(cors());
app.use(express.json());
const port = 9000;

app.use("/",(req, res)=>{
    res.json({message: "Hello From Client"})
})

app.post('/', async(req, res)=>{

    try {

        const prompt = req.body.prompt;
        console.log(prompt);

        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            temperature: 0,
            max_tokens: 3000,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0,
          });

        res.status(200).send({
            bot: response.data.choices[0].text
        })


        
    } catch (error) {
        console.log(error);
        res.status(500).send({error})
    }
    
});

/*
app.listen(port, ()=>{
    console.log(`Starting Server on port: ${port} `);
})
*/

try {
    
    const port = process.env.PORT || 5557;
    console.log(port);
    app.listen({port}, ()=> console.log(`Server is running on port http://localhost:${port}`));
    
} catch (error) {

    console.log(error);
    
}