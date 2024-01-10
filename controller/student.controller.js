const { SinhVien, Source, Student_Source } = require("../models/index");

const createStudentController = async (req, res) => {
  const SV = {
    NameStudent: "Tran Quang Huy",
    MssvStudent: 20012931,
  };
  const SV2 = {
    NameStudent: "Nguyen Van   A",
    MssvStudent: 22222222,
  };
  // const CreateStudent = await SinhVien.create(SV);
  // console.log(CreateStudent);

  //======================================
  const course1 = {
    subject: "lap trinh nang cao",
    IdSubject: 123,
  };
  const course2 = {
    subject: "c++",
    IdSubject: 111,
  };

  // const CreateStudent = await Source.create(course2);
  // console.log(CreateStudent);
  //======================================
  const SS = {
    MssvStudent: 20012931,
    IdSubject: 111,
    Scores: 10,
  };
  const SS2 = {
    MssvStudent: 22222222,
    IdSubject: 111,
    Scores: 10,
  };

  // const CreateStudent = await Student_Source.create(SS);

  //=================================================================

  const id = 20012931;

  const CreateStudent = await Student_Source.findOne({
    where: {
      MssvStudent: id,
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

  res.status(201).json({ CreateStudent });
};

module.exports = {
  createStudentController,
};
