import students from "../__mock__/students.mock";

function studentService() {
  return {
    getStudents: () => Promise.resolve(students),
  };
}

export default studentService;
