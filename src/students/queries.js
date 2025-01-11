const allStudents = "SELECT * FROM students";
const studentById = "SELECT * FROM students WHERE id = $1";

module.exports = {
  allStudents,
  studentById,
};
