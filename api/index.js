import fs from "fs"
import path from "path";
import express from "express";
import favicon from "serve-favicon";
import cors from 'cors';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const dataPath = path.join(__dirname, 'data.json');

let data;

try {
    data = JSON.parse(fs.readFileSync(dataPath));
} catch (error) {
    console.error("Error reading data.json:", error);
    data = {};
}

const app = express();

app.use(favicon(path.join(__dirname,'./public/','Q&S-BRANCO-PNG.ico')));
app.use(cors())

app.get("/", (_, res) => {
    res.send("Hello!")
});

app.get("/api", (_, res) => {
    res.send(data)
});

export default app;
