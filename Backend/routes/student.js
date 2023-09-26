
const express = require('express');
const router = express.Router();
const studentController = require('../controllers/students');

router.post('/registerDetails' , studentController.studentRegistration);

router.get('/:id' , studentController.getStudentDetails)

module.exports = router;
