import fs from "fs"
import express from "express";
import cors from 'cors';
import ViteExpress from "vite-express";

const data = JSON.parse(fs.readFileSync('./data.json'));
const app = express();

const corsOptions = {
    origin: ["https://qualityservice.vercel.app/", 'http://localhost:5173/'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Content-Length', 'X-Knowledge-Base'],
    optionsSuccessStatus: 200
}

app.use(cors())

app.get("/", (_, res) => {
    res.send(data)
});

const server = app.listen(3000, "0.0.0.0", () => {
    console.log("Server is listening...")
});

ViteExpress.bind(app, server);
