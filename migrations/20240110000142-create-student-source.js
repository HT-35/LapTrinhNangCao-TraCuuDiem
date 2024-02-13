"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Tạo bảng sources nếu chưa tồn tại
    await queryInterface.createTable("Sources", {
      IdSubject: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      // Thêm các cột khác của bảng sources ở đây (nếu cần)
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    // Kiểm tra xem chỉ mục đã tồn tại hay chưa trước khi thêm nó
    const existingIndex = await queryInterface.showIndex("Sources", [
      "IdSubject",
    ]);
    if (!existingIndex) {
      // Nếu chỉ mục chưa tồn tại, thêm nó
      await queryInterface.addIndex("Sources", ["IdSubject"]);
    }

    // Thêm chỉ mục cho cột MssvStudent trong bảng sinhviens
    await queryInterface.addIndex("SinhViens", ["MssvStudent"]);

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
          model: "SinhViens",
          key: "MssvStudent",
        },
      },
      IdSubject: {
        type: Sequelize.INTEGER,
        references: {
          model: "Sources",
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
    // Xóa bảng sources trong hàm down nếu bạn muốn rollback
    await queryInterface.dropTable("Sources");
  },
};
