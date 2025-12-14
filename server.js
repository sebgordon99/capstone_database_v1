const express = require("express");
const app = express();
require("dotenv").config();
let dbConnect = require("./dbConnect");

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my PostgreSQL application." });
});

const PORT = process.env.PORT || 8089;

app.use("/users", require("./routes/userRoutes"));
app.use("/tutors", require("./routes/tutorRoutes"));
app.use("/ads", require("./routes/adRoutes"));
app.use("/availability", require("./routes/availabilityRoutes"));
app.use("/instruments", require("./routes/instrumentRoutes"));
app.use("/locations", require("./routes/locationRoutes"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
