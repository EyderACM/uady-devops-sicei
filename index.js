const express = require("express");

const PORT = 8080;
const HOST = "0.0.0.0";

const students = [
  {
    id: 1,
    fullName: "Eyder Concha",
    code: "A12312312332",
  },
  {
    id: 2,
    fullName: "Juan Perez",
    code: "A12312312332",
  },
  {
    id: 3,
    fullName: "José Luis",
    code: "A12312312332",
  },
  {
    id: 4,
    fullName: "Mateo Aguilar",
    code: "A12312312332",
  },
];

const app = express();
app.get("/students", (req, res) => {
  res.json().status(200).send(students);
});

app.listen(PORT, HOST);
console.log(`Running on ${PORT}`);
