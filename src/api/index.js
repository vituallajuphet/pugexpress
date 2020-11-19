var express = require("express");
// var app = express();
const users = require("./users");
var router = express.Router();

//Middle ware that is specific to this router
router.use((req, res, next) => {
  console.log("routing happens");
  next();
});

// Define the home page route
router.get("/api/users", (req, res) => res.json({ status: "ok", data: users }));
router.get("/api/users/:id", (req, res) => {
  const user = users.filter((usr) => usr.id === Number(req.params.id));

  if (user !== undefined && user.length !== 0) {
    res.json({ status: "ok", data: user });
  } else {
    res.status(400).json({ status: "error", data: [], msg: "user not found" });
  }
});

module.exports = router;
