const express = require("express");
const homePage = express.Router();

const { pageHome, handleScores } = require("../controller/admin.controller");
homePage.get("/", pageHome);

homePage.post("/", handleScores);
module.exports = { homePage };
