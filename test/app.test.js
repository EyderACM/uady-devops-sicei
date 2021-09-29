import app from "../src/app";
import supertest from "supertest";

const request = supertest(app);

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

it("It should receive a list of students", async () => {
  const response = await request.get("/students");

  expect(response.status).toBe(200);
  expect(response.body).toStrictEqual(students);
});
