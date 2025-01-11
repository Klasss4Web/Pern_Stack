const { Router } = require("express");
const {
  getStudents,
  addStudent,
  getStudentById,
  deleteStudentById,
} = require("./controllers");

const router = Router();

router.get("/", getStudents);
router.post("/", addStudent);
router.get("/:id", getStudentById);
router.delete("/:id", deleteStudentById);

module.exports = router;
