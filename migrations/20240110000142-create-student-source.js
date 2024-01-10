"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Kiểm tra xem chỉ mục đã tồn tại hay chưa trước khi thêm nó
    const existingIndex = await queryInterface.showIndex("sinhviens", [
      "MssvOfStudnet",
    ]);
    if (!existingIndex) {
      // Nếu chỉ mục chưa tồn tại, thêm nó
      await queryInterface.addIndex("sinhviens", ["MssvOfStudnet"]);
    }

    // Thêm chỉ mục cho cột IdOfsubject trong bảng sources
    await queryInterface.addIndex("sources", ["IdSubject"]);

    await queryInterface.createTable("Student_Sources", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      MssvStudent: {
        type: Sequelize.INTEGER,
        references: {
          model: "sinhviens",
          key: "MssvStudent",
        },
      },
      IdSubject: {
        type: Sequelize.INTEGER,
        references: {
          model: "sources",
          key: "IdSubject",
        },
      },
      Scores: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Student_Sources");
  },
};
