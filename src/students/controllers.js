// const pool = require('../../db');
import pool from '../../db.js';
import {
  allStudents,
  studentById,
  checkEmailExists,
  createNewStudent,
  removeStudentById,
  updateStudentDetailsById,
} from './queries.js';

// const {
//   allStudents,
//   studentById,
//   checkEmailExists,
//   createNewStudent,
//   removeStudentById,
//   updateStudentDetailsById,
// } = require('./queries');

const getStudents = (req, res) => {
  pool.query(allStudents, (error, results) => {
    if (error) {
      throw new Error('error', error);
    }
    res.status(200).json(results.rows);
  });
};

const getStudentById = (req, res) => {
  const studentId = parseInt(req.params.id);
  pool.query(studentById, [studentId], (error, results) => {
    if (error) {
      throw new Error('error', error);
    }
    if (results.rows.length < 1) {
      return res.status(400).json({
        message: 'Student not found',
        success: false,
      });
    }
    res.status(200).json(results.rows);
  });
};

const addStudent = (req, res) => {
  const { name, email, dob, age } = req.body;

  pool.query(checkEmailExists, [email], (error, results) => {
    if (error) {
      throw new Error('Error creating student', error);
    }
    if (results.rows.length) {
      return res.status(409).json({
        message: 'Email already exists',
        success: false,
      });
    }
    pool.query(createNewStudent, [name, email, age, dob], (error) => {
      if (error) {
        throw new Error('Error creating new student', error);
      }
      res.status(201).json({
        message: 'Student created successfully!',
        success: true,
      });
    });
  });
};

const deleteStudentById = (req, res) => {
  const studentId = parseInt(req.params.id);
  pool.query(studentById, [studentId], (error, results) => {
    if (error) {
      throw new Error('error', error);
    }
    if (!results.rows.length) {
      return res.status(400).json({
        message: 'Student not found',
        success: false,
      });
    }

    pool.query(removeStudentById, [studentId], (error) => {
      if (error) {
        throw new Error('error', error);
      }
      return res.status(200).json({
        message: 'Student deleted successfully!',
        success: true,
      });
    });
  });
};

const updateStudentById = (req, res) => {
  const studentId = parseInt(req.params.id);
  const { name } = req.body;
  pool.query(studentById, [studentId], (error, results) => {
    if (error) {
      throw new Error('error', error);
    }
    if (!results.rows.length) {
      return res.status(400).json({
        message: 'Student not found',
        success: false,
      });
    }
    pool.query(updateStudentDetailsById, [name, studentId], (error) => {
      if (error) {
        throw new Error('error', error);
      }
      return res.status(200).json({
        message: 'Student data updated successfully!',
        success: true,
      });
    });
  });
};

export {
  addStudent,
  getStudents,
  getStudentById,
  updateStudentById,
  deleteStudentById,
};
