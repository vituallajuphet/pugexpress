var express = require("express");
var app = express();
const path = require("path");
const PORT = process.env.PORT || 4000;

app.use(express.static("public"));

// app.use("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(require("./api/index"));
app.use(require("./web/index"));

app.listen(PORT, () => console.log(`application running at ${PORT}`));
