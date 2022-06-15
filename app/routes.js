var express = require("express");

var router = express.Router();

router.get("/", function (req, res) {
  res.render("index");
});
router.get("/orm", function (req, res) {
  res.render("orm");
});
router.get("/swallowedexception", function (req, res) {
  res.render("swallowedexception");
});
router.get("/untracked", function (req, res) {
  res.render("untracked");
});
router.get("/slowdb", function (req, res) {
  res.render("slowdb");
});
router.get("/slowrequest", function (req, res) {
  res.render("slowrequest");
});

module.exports = router;
