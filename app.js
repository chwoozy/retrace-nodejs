var express = require("express");
var path = require("path");

var routes = require("./app/routes");

var app = express();

app.set("port", 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(routes);
app.use("/assets", express.static(__dirname + "/assets"));

app.listen(app.get("port"), () => {
  console.log("Server started on port " + app.get("port"));
});
