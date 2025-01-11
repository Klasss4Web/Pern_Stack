const { Router } = require("express");
const { getStudents, addStudent, getStudentById } = require("./controllers");

const router = Router();

router.get("/", getStudents);
router.post("/", addStudent);
router.get("/:id", getStudentById);

module.exports = router;
