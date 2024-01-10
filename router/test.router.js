const express = require("express");

const router = express.Router();

const { createStudentController } = require("../controller/student.controller");

router.get("/", createStudentController);

router.post("/", (req, res) => {
  const id = req.body.code;
  if (id) {
    console.log(id);
    res.send(id);
  }
});

// Route để xử lý dữ liệu khi form được gửi đi
router.post("/multiply", (req, res) => {
  const enteredNumber = req.body.number;
  console.log(enteredNumber);
  const result = Number(enteredNumber) * 2;

  // Trả về kết quả nhân đôi cho client
  res.json({ result });
});

router.get("/user/:id", (req, res) => {
  const id = req.params;
  const data = req.query;
  console.log(data);
  res.send(data);
});

router.post("/submit", (req, res) => {
  const email = req.body;
  console.log(email);
  // Xử lý địa chỉ email ở đây (ví dụ: lưu vào cơ sở dữ liệu, gửi email, etc.)
  res.send(`Đã nhận địa chỉ email: ${email}`);
});

router.get("/submit", (req, res) => {
  const { email, name } = req.query;
  console.log({ email, name });
  // Xử lý địa chỉ email ở đây (ví dụ: lưu vào cơ sở dữ liệu, gửi email, etc.)
  res.send(`Đã nhận địa chỉ email: ${email} và name ${name}`);
});

module.exports = { router };
