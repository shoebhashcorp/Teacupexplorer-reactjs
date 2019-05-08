const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
var path = require("path");
const users = require("./routes/api/users");
const dirMan = require("./routes/api/dirMan");

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.set("approot", path.resolve(__dirname));

global.appRoot = path.resolve(__dirname);

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

// Use Routes
app.use("/api/users", users);

app.use("/api/dirman", dirMan);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server running on port ${port}`));
