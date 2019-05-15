var db = require("../models");

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

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

// Load results
// app.get("/results", function(req, res) {
//   db.Sitter.findAll({
//     where: {
//       daySelected: req.body.daySelected,
//       zipCode: req.body.zipCode
//     }
//   }).then(function(dbSitter) {
//     res.render("result", {
//       sitter: dbSitter
//     });
//   });
// });
