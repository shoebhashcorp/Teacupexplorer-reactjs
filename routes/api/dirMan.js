const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const passport = require("passport");
var glob = require("glob");
// var recursive = require("recursive-readdir");
var klawSync = require("klaw-sync");
// @route   GET api/posts/test
// @desc    Tests post route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Posts Works" }));

// @route   POST api/dirman
// @desc    Create directories
// @access  Public
router.post(
  "/",

  (req, res) => {
    console.log(
      req.body.pathtocreate == ""
        ? "Variable is not set"
        : req.body.pathtocreate
    );

    let cwd = path.join(appRoot, "workspace", "shoeb");
    // console.log("user", req.user.name);
    // console.log(cwd);
    // console.log(appRoot);

    let pathToCreate = req.body.pathtocreate;
    let newPath = path.join(cwd, pathToCreate);

    try {
      if (!fs.existsSync(newPath)) {
        fs.mkdirSync(newPath, { recursive: true });
        res.json({ msg: "Path created" });
      } else {
        res.json({ msg: "Path exists" });
      }
    } catch (error) {
      res.json(error);
    }
  }
);

router.get(
  "/folder",

  (req, res) => {
    // res.json({ msg: "success" });

    // glob("workspace/**/*", function(err, files) {
    //   res.json(files);
    //   console.log(files);
    // });
    //
    // Create an empty variable to be accesible in the closure
    var paths;

    // // The directory that you want to explore
    var directoryToExplore = "workspace";

    try {
      paths = klawSync(directoryToExplore);
      res.send(paths);
    } catch (err) {
      console.error(err);
    }

    // [
    //   {path:"c:/file.txt", stats: {..File information..}},
    //   {path:"c:/file.txt", stats: {..File information..}},
    //   {path:"c:/file.txt", stats: {..File information..}},
    // ]

    console.log(paths);
  }
);

module.exports = router;
