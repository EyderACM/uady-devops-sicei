const express = require("express");

const PORT = 8080;
const HOST = "0.0.0.0";

const students = [
  {
    id: 1,
    fullName: "Eyder Concha",
    age: 21,
  },
  {
    id: 2,
    fullName: "Juan Perez",
    age: 21,
  },
  {
    id: 3,
    fullName: "José Luis",
    age: 25,
  },
  {
    id: 4,
    fullName: "Mateo Aguilar",
    age: 29,
  },
];

const app = express();
app.get("/students", (req, res) => {
  res.json().status(200).send(students);
});

app.listen(PORT, HOST);
console.log(`Running on ${PORT}`);
