const { SinhVien, Source, Student_Source } = require("../models/index");

const createStudentController = async (req, res) => {
  const SV = {
    NameStudent: "Tran Quang Huy",
    MssvStudent: 20012931,
  };
  const SV2 = {
    NameStudent: "Nguyen Van   A",
    MssvStudent: 123456,
  };
  const CreateStudent = await SinhVien.create(SV);
  res.status(201).json({ CreateStudent });
};

const Create_Source_Controller = async (req, res) => {
  try {
    const SS = {
      MssvStudent: 20012931,
      IdSubject: 111,
      Scores: 10,
    };
    const SS2 = {
      MssvStudent: 22222222,
      IdSubject: 222,
      Scores: 10,
    };

    const Create_StudentSource = await Source.create(SS2);

    res.status(201).json({ Create_StudentSource });
  } catch (error) {
    res.status(404).json({ error });
  }
};

const create_Student_Course = async (req, res) => {
  const SS = {
    MssvStudent: 20012931,
    IdSubject: 111,
    Scores: 10,
  };
  const SS2 = {
    MssvStudent: 123456,
    IdSubject: 222,
    Scores: 10,
  };

  const CreateStudent = await Student_Source.create(SS2);

  res.status(201).json({ CreateStudent });
};

const findOneStudentCourse = async (req, res) => {
  const id = 20012931;

  const CreateStudent = await Student_Source.findOne({
    where: {
      MssvStudent: id,
      IdSubject: 111,
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
  Create_Source_Controller,
  create_Student_Course,
};
