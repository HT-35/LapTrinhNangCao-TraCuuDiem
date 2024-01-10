"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Source extends Model {
    static associate({ Student_Source }) {
      Source.hasMany(Student_Source, {
        foreignKey: "IdSubject",
        as: "subjectofstudent", // Đổi tên mối quan hệ
      });
    }
  }
  Source.init(
    {
      subject: DataTypes.STRING,
      IdSubject: {
        type: DataTypes.INTEGER,
        primaryKey: true, // Thêm dòng này để đặt cột 'MssvStudent' làm khóa chính
      },
    },
    {
      sequelize,
      modelName: "Source",
    }
  );
  return Source;
};
