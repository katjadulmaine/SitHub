// var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index", {
      msg: "Welcome!"
    });
  });

  // Load Parent page
  app.get("/parent", function(req, res) {
    res.render("parent", {
      msg: "Welcome!"
    });
  });

  // Load Sitter Page
  app.get("/sitter", function(req, res) {
    res.render("sitter", {
      msg: "Welcome!"
    });
  });

  app.get("/sitter/date", function(req, res) {
    res.render("date", { layout: false });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
