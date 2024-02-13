const { SinhVien, Source, Student_Source } = require("../models/index");

const pageHome = (req, res) => {
  res.render("index");
};

const handleScores = async (req, res) => {
  const { MSSV, Course } = req.body;
  // const data = req.body;
  // console.log(data);
  try {
    if (MSSV && Course) {
      try {
        // console.log({ MSSV, Course });
        const findProductDetail = await Student_Source.findOne({
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

        // console.log("scores", findProductDetail);
        if (findProductDetail == null) {
          return res.status(200).json({ status: false, data: "Not Found !!" });
        }
        res.status(200).json({ status: true, data: findProductDetail });
      } catch (error) {
        res.status(400).json({ status: false, data: error });
      }
    } else {
      res.status(400).json("Missing MSSV or Mã Môn Học");
    }
  } catch (error) {
    res.status(400).json({ status: false, data: error });
  }
};

module.exports = { pageHome, handleScores };
