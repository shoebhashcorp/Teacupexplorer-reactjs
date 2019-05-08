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

const getCWD = (userName = "shoeb") => {
  return path.join(appRoot, "workspace", userName);
};

// @route   POST api/dirman
// @desc    Create directories
// @access  Public
router.post("/", (req, res) => {
  let { pathtocreate } = req.body;

  let cwd = getCWD();

  if (!pathtocreate) {
    return res.status(400).json({ error: "You did not provide the path" });
  }

  let newPath = path.join(cwd, pathtocreate);

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
});

router.post("/dir", (req, res) => {
  let { pathtoexplore } = req.body;
  let cwd = getCWD();

  if (!pathtoexplore) {
    pathtoexplore = cwd;
  } else {
    pathtoexplore = path.join(cwd, pathtoexplore);
  }

  let dirContent = fs.readdirSync(pathtoexplore);
  if (dirContent.length) {
    dirContent = dirContent.map((dirName, index) => {
      return {
        id: index,
        name: dirName,
        extension: null
      };
    });
  }

  res.json({ dirContent });
});

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
