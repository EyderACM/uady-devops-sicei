import studentRouter from "./routes/students.routes";
import express from "express";

const PORT = 8081;
const HOST = "0.0.0.0";

const app = express();

app.use("/students", studentRouter);

app.listen(PORT, HOST);
console.log(`Running on ${PORT}`);
