const express = require("express");
const root = express.Router();
const { router } = require("./test.router");

const { homePage } = require("./homePage.root");
root.use("/", homePage);
module.exports = { root };
