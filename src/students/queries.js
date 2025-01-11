const allStudents = "SELECT * FROM students";
const studentById = "SELECT * FROM students WHERE id = $1";
const createNewStudent =
  "INSERT INTO person (name, email, age, dob) VALUES (name = $1, email = $2, age = $3, dob = $3)";
const checkEmailExists = "SELECT email FROM students  WHERE email = $1";

module.exports = {
  allStudents,
  studentById,
  createNewStudent,
  checkEmailExists,
};
