import fs from "fs"
import express from "express";
import cors from 'cors';

const data = JSON.parse(fs.readFileSync('./data.json'));
const app = express();

app.use(cors())

app.get("/api", (_, res) => {
    res.send(data)
});

app.listen(3000, () => {
    console.log("Server is listening...")
});
