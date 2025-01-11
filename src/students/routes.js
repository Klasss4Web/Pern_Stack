// const { Router } = require('express');
import { Router } from 'express';
import {
  getStudents,
  addStudent,
  getStudentById,
  updateStudentById,
  deleteStudentById,
} from './controllers';
// const {
//   getStudents,
//   addStudent,
//   getStudentById,
//   updateStudentById,
//   deleteStudentById,
// } = require("./controllers");

const router = Router();

router.get('/', getStudents);
router.post('/', addStudent);
router.get('/:id', getStudentById);
router.put('/:id', updateStudentById);
router.delete('/:id', deleteStudentById);

module.exports = router;
