const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const passport = require("passport");
var glob = require("glob");
var recursive = require("recursive-readdir");
var klawSync = require("klaw-sync");
// @route   GET api/posts/test
// @desc    Tests post route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Posts Works" }));

// @route   GET api/posts
// @desc    Get posts
// @access  Public
router.get("/", (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ nopostsfound: "No posts found" }));
});

// @route   POST api/dirman
// @desc    Create directories
// @access  Public
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    console.log(
      req.body.pathtocreate == ""
        ? "Variable is not set"
        : req.body.pathtocreate
    );

    let cwd = path.join(appRoot, "workspace", req.user.name);
    console.log("user", req.user.name);
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
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // res.json({ msg: "success" });

    // glob("workspace/**/*", function(err, files) {
    //   console.log(files);
    // });
    // let cwd = path.join(appRoot, "workspace");
    // fs.readdir(cwd, function(err, files) {
    //   //handling error
    //   if (err) {
    //     return console.log("Unable to scan directory: " + err);
    //   }
    //   //listing all files using forEach
    //   files.forEach(function(file) {
    //     // Do whatever you want to do with the file
    //     console.log(file);
    //   });
    // });
    // Require the module

    // Create an empty variable to be accesible in the closure
    var paths;

    // The directory that you want to explore
    var directoryToExplore = "./workspace";

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
