const express = require("express");
const root = express.Router();

const { homePage } = require("./homePage.root");
const { createData } = require("./createData");

root.use("/", homePage);
root.use("/create", createData);
module.exports = { root };
