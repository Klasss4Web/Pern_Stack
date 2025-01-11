const pool = require("../../db");

const {
  allStudents,
  studentById,
  checkEmailExists,
  createNewStudent,
} = require("./queries");

const getStudents = (req, res) => {
  pool.query(allStudents, (error, results) => {
    if (error) throw new Error("error", error);
    res.status(200).json(results.rows);
  });
};

const getStudentById = (req, res) => {
  const studentId = parseInt(req.params.id);
  pool.query(studentById, [studentId], (error, results) => {
    if (error) throw new Error("error", error);
    if (results.rows.length < 1)
      return res.status(400).json({
        message: "Student not found",
        success: false,
      });
    res.status(200).json(results.rows);
  });
};

const addStudent = (req, res) => {
  const { name, email, dob, age } = req.body;

  pool.query(checkEmailExists, [email], (error, results) => {
    if (error) throw new Error("Error creating student", error);
    if (results.rows.length) {
      res.status(409).json({
        message: "Email already exists",
        success: false,
      });
    }
    pool.query(createNewStudent, [name, email, age, dob], (error, results) => {
      if (error) throw new Error("Error creating new student", error);
      res.status(201).json({
        message: "Student created successfully!",
        success: true,
      });
    });
  });
};

module.exports = {
  addStudent,
  getStudents,
  getStudentById,
};
