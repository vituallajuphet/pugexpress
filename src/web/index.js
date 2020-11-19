var express = require("express");
// var app = express();
// const users = require("./users");
const path = require("path");
var router = express.Router();

//Middle ware that is specific to this router
router.use((req, res, next) => {
  console.log("routing happens");
  next();
});

router.get("/", (req, res) => {
  res.render("index", { title: "home", message: "Hello there!" });
});

router.get("/about", (req, res) => {
  res.render("about", { title: "about", message: "Hello there!" });
});

router.get("/careers", (req, res) => {
  res.render("careers", { title: "careers", message: "Hello there!" });
});

router.get("/contact", (req, res) => {
  res.render("contact", { title: "contact", message: "Hello there!" });
});

module.exports = router;
