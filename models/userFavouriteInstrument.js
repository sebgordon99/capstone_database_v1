module.exports = (sequelize, DataTypes) =>
  sequelize.define("UserFavouriteInstrument", {}, {
    tableName: "user_favourite_instruments",
    timestamps: false,
    underscored: true,
  });