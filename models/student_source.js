"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Student_Source extends Model {
    static associate({ SinhVien, Source }) {
      Student_Source.belongsTo(SinhVien, {
        foreignKey: "MssvStudent",
        as: "MSSVofstudent",
      });

      Student_Source.belongsTo(Source, {
        foreignKey: "IdSubject",
        as: "subjectofstudent",
      });
    }
  }
  Student_Source.init(
    {
      MssvStudent: DataTypes.NUMBER,
      IdSubject: DataTypes.NUMBER,
      Scores: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: "Student_Source",
    }
  );
  return Student_Source;
};
