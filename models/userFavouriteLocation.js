module.exports = (sequelize, DataTypes) =>
  sequelize.define("UserFavouriteLocation", {}, {
    tableName: "user_favourite_locations",
    timestamps: false,
    underscored: true,
  });