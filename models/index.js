const { Sequelize, DataTypes } = require("sequelize");
const userFavouriteAd = require("./userFavouriteAd");
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
  }
);

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

// sync the models here

const init = async () => {
  try {
    await sequelize.authenticate();
    console.log("Successful connection to PostgreSQL Database");

    // 🔑 CREATE BASE TABLES FIRST
    await Location.sync();
    await Instrument.sync();

    // 🔑 THEN TABLES THAT DEPEND ON THEM
    await User.sync();
    await Tutor.sync();

    // 🔑 THEN ADS & AVAILABILITY
    await Ad.sync();
    await Availability.sync();

    // 🔑 THEN JOIN TABLES
    await UserFavouriteTutor.sync();
    await UserFavouriteLocation.sync();
    await UserFavouriteInstrument.sync();
    await UserFavouriteAd.sync();

    console.log("All models synced");
  } catch (err) {
    console.error(err);
  }
};

init();

/* =======================
   CORE RELATIONSHIPS
   ======================= */

// USERS ↔ LOCATIONS
User.belongsTo(Location, {
  foreignKey: "location_id",
});
Location.hasMany(User, {
  foreignKey: "location_id",
});

// TUTORS ↔ LOCATIONS
Tutor.belongsTo(Location, {
  foreignKey: "location_id",
});
Location.hasMany(Tutor, {
  foreignKey: "location_id",
});

// TUTORS ↔ ADS
Tutor.hasMany(Ad, {
  foreignKey: "tutor_id",
});
Ad.belongsTo(Tutor, {
  foreignKey: "tutor_id",
});

// ADS ↔ LOCATIONS
Ad.belongsTo(Location, {
  foreignKey: "location_id",
});
Location.hasMany(Ad, {
  foreignKey: "location_id",
});

// ADS ↔ INSTRUMENTS
Ad.belongsTo(Instrument, {
  foreignKey: "instrument_id",
});
Instrument.hasMany(Ad, {
  foreignKey: "instrument_id",
});

// ADS ↔ AVAILABILITY
Ad.hasMany(Availability, {
  foreignKey: "ad_id",
});
Availability.belongsTo(Ad, {
  foreignKey: "ad_id",
});

// USERS ↔ AVAILABILITY
User.hasMany(Availability, {
  foreignKey: "user_id",
});
Availability.belongsTo(User, {
  foreignKey: "user_id",
});

// USERS ↔ TUTORS (FAVOURITES)
User.belongsToMany(Tutor, {
  through: UserFavouriteTutor,
  foreignKey: "user_id",
  otherKey: "tutor_id",
});

Tutor.belongsToMany(User, {
  through: UserFavouriteTutor,
  foreignKey: "tutor_id",
  otherKey: "user_id",
});

// USERS ↔ LOCATIONS
User.belongsToMany(Location, {
  through: UserFavouriteLocation,
  foreignKey: "user_id",
  otherKey: "location_id",
});

// USERS ↔ INSTRUMENTS
User.belongsToMany(Instrument, {
  through: UserFavouriteInstrument,
  foreignKey: "user_id",
  otherKey: "instrument_id",
});

// USERS ↔ ADS
User.belongsToMany(Ad, {
  through: UserFavouriteAd,
  foreignKey: "user_id",
  otherKey: "ad_id",
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
