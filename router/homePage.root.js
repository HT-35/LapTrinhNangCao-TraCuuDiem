const express = require("express");
const homePage = express.Router();

const { pageHome, handleScores } = require("../controller/admin.controller");

const { createStudentController } = require("../controller/student.controller");

homePage.get("/", pageHome);

homePage.post("/", handleScores);

homePage.get("/create", createStudentController);
module.exports = { homePage };
