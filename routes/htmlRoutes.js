//var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/sithub.html"));
  });
  // Load Parent page
  app.get("/parent", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/parent.html"));
  });

  // Load Sitter Intake
  app.get("/sitter", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/sitter.html"));
  });

  // Load Sitter Results
  app.get("/result", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/result.html"));
  });

  //app.get("/example/:id", function(req, res) {
  //  db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //    res.render("example", {
  //      example: dbExample
  //    });
  //  });
  // });

  // Render 404 page for any unmatched routes
  app.get("/404", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/404.html"));
  });
};
