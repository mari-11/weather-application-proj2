module.exports = function(sequelize, DataTypes) {
  var Request = sequelize.define("Request", {
      question: {
        type: DataTypes.STRING,
        allowNull: false
      },
   