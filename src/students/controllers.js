const pool = require("../../db");

const { allStudents, studentById } = require("./queries");

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

module.exports = {
  getStudents,
  getStudentById,
};
