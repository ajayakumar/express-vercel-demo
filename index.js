import express from "express";

const app = express();
const port = 9000;

app.listen(port, ()=>{
    console.log(`Starting Server on port: ${port} `);
})