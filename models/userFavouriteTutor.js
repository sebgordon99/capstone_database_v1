module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "UserFavouriteTutor",
    {},
    {
      tableName: "user_favourite_tutors",
      timestamps: false,
      underscored: true,
    }
  );
