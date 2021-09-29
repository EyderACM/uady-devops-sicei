import studentRouter from "./routes/students.routes";
import express from "express";

const app = express();

app.use("/students", studentRouter);

export default app;
