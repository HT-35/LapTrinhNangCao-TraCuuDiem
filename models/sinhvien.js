"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SinhVien extends Model {
    static associate({ Student_Source }) {
      SinhVien.hasMany(Student_Source, {
        foreignKey: "MssvStudent",
        as: "MSSVofstudent",
      });
    }
  }
  SinhVien.init(
    {
      NameStudent: DataTypes.STRING,
      MssvStudent: {
        type: DataTypes.INTEGER,
        primaryKey: true, // Thêm dòng này để đặt cột 'MssvStudent' làm khóa chính
      },
    },
    {
      sequelize,
      modelName: "SinhVien",
    }
  );
  return SinhVien;
};
