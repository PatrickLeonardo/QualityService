import fs from "fs"
import express from "express";
import cors from 'cors';
import ViteExpress from "vite-express";

const data = JSON.parse(fs.readFileSync('./api/data.json'));
const app = express();

app.use(cors())

app.get("/", (_, res) => {
    res.send(data)
});

const server = app.listen(3000, "0.0.0.0", () => {
    console.log("Server is listening...")
});

ViteExpress.bind(app, server);
