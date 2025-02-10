import fs from "fs"
import express from "express";
import cors from 'cors';

let data;
try {
    data = JSON.parse(fs.readFileSync('./data.json'));
} catch (error) {
    console.error("Error reading data.json:", error);
    data = {};
}

const app = express();

app.use(cors())

app.get("/", (_, res) => {
    res.send("Hello!")
});

app.get("/api", (_, res) => {
    res.send(data)
});

export default app;
