export const getStudents = (studentsService) => async (req, res) => {
  try {
    const students = await studentsService.getStudents();
    return res.status(200).json(students);
  } catch (error) {
    return res.status(500).json({ msg: "Unexpected DB error", error });
  }
};
