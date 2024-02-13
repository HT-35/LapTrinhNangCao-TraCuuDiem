const express = require("express");
const createData = express.Router();

const {
  createStudentController,
  Create_Source_Controller,
  create_Student_Course,
} = require("../controller/CreateDatacontroller");

createData.get("/student", createStudentController);
createData.get("/source", Create_Source_Controller);
createData.get("/StudentCourse", create_Student_Course);

module.exports = {
  createData,
};
