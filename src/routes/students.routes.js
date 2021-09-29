import studentsService from "../services/student.service";
import { getStudents } from "../controllers/student.controller";

import { Router } from "express";

const router = Router();
const studentController = getStudents(studentsService());

router.get("/", studentController);

export default router;
