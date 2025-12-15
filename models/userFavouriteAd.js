module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "UserFavouriteAd",
    {},
    {
      tableName: "user_favourite_ads",
      timestamps: false,
      underscored: true,
    }
  );
