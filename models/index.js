const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
});

const User = require("./user")(sequelize);
const Tutor = require("./tutor")(sequelize);
const Ad = require("./ad")(sequelize);
const Availability = require("./availability")(sequelize);
const Instrument = require("./instrument")(sequelize);
const Location = require("./location")(sequelize);

const UserFavouriteTutor = require("./userFavouriteTutor")(
  sequelize,
  DataTypes
);
const UserFavouriteLocation = require("./userFavouriteLocation")(
  sequelize,
  DataTypes
);
const UserFavouriteInstrument = require("./userFavouriteInstrument")(
  sequelize,
  DataTypes
);
const UserFavouriteAd = require("./userFavouriteAd")(sequelize, DataTypes);

/* ---------- CORE RELATIONSHIPS ---------- */

User.belongsTo(Location);
Tutor.belongsTo(Location);

Tutor.hasMany(Ad);
Ad.belongsTo(Tutor);

Ad.belongsTo(Location);
Ad.belongsTo(Instrument);

Ad.hasMany(Availability);
Availability.belongsTo(Ad);

Availability.belongsTo(User);
User.hasMany(Availability);

/* ---------- FAVOURITES (M:N) ---------- */

User.belongsToMany(Tutor, {
  through: UserFavouriteTutor,
});

Tutor.belongsToMany(User, {
  through: UserFavouriteTutor,
});

User.belongsToMany(Location, {
  through: UserFavouriteLocation,
});

User.belongsToMany(Instrument, {
  through: UserFavouriteInstrument,
});

User.belongsToMany(Ad, {
  through: UserFavouriteAd,
});

module.exports = {
  sequelize,
  User,
  Tutor,
  Ad,
  Availability,
  Instrument,
  Location,
};
