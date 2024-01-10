const { SinhVien, Source, Student_Source } = require("../models/index");

const pageHome = (req, res) => {
  res.render("index");
};

const handleScores = async (req, res) => {
  const { MSSV, Course } = req.body;
  //   console.log(data);

  console.log({ MSSV, Course });
  const CreateStudent = await Student_Source.findOne({
    where: {
      MssvStudent: MSSV,
      IdSubject: Course,
    },
    include: [
      {
        model: SinhVien,
        as: "MSSVofstudent",
      },
      {
        model: Source,
        as: "subjectofstudent",
      },
    ],
  });
  res.json(CreateStudent);
};

module.exports = { pageHome, handleScores };
