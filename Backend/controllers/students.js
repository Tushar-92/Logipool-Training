
const LogicpoolStudents = require('../models/students');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

async function studentRegistration(req, res) {
    try {
        let studentName = req.body.Name;
        let studentEmail = req.body.Email;
        let studentPassword = req.body.Password;

        const newStudent = new LogicpoolStudents({
            Name: studentName,
            Email: studentEmail,
            Password: studentPassword
        });

        await newStudent.save();
        console.log('New Student Record Created');
        res.status(201).json({Message: 'Sucessfully created new student record' , newStudent});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({Message: error.message});
    }
}

async function getStudentDetails(req, res) {
    try {
        let requestedId = req.params.id;
        // console.log(requestedId);
        let student = await LogicpoolStudents.find({_id: requestedId});
        res.status(200).json(student);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Student Record Not Found'});
    }
}


module.exports = {
    studentRegistration,
    getStudentDetails
}
