const allStudents = "SELECT * FROM students";
const studentById = "SELECT * FROM students WHERE id = $1";
const createNewStudent =
  "INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4)";
const checkEmailExists = "SELECT email FROM students  WHERE email = $1";

module.exports = {
  allStudents,
  studentById,
  createNewStudent,
  checkEmailExists,
};
