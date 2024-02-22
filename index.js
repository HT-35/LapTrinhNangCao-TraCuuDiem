const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const path = require("path");

const { connectDB } = require("./config/connectMysql");
connectDB();

const { root } = require("./router/root.router");

app.use(express.json());

// Sử dụng middleware để đọc dữ liệu từ body
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", root);

app.listen(port, () => {
  console.log("server run on :  http://localhost:3000/");
});
