var db = require("../models");
//var daySelected = require("../public/js") Assuming code to get sitter day of week will live with the other form value code.

module.exports = function(app) {
  //Get Parents where daySelected matches
  app.get("/api/parents", function(req, res) {
    db.Parent.findAll({
      where: {
        daySelected: req.body.daySelected,
        zipcode: req.body.zipcode
      }
    }).then(function(dbParents) {
      res.json(dbParents);
    });
  });

  // Create a new Parent row
  app.post("/api/parents", function(req, res) {
    db.Parent.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      pic: req.body.pic,
      numChildren: req.body.numChildren,
      hasPets: req.body.hasPets,
      provideTransport: req.body.provideTransport,
      comments: req.body.comments,
      zipcode: req.body.zipcode,
      daySelected: req.body.daySelected
    }).then(function(dbParent) {
      res.json(dbParent);
      console.log("New Parent Added");
    });
  });

  //Update Parent daySelected
  app.put("/api/parents/:id", function(req, res) {
    db.Parent.update(
      {
        daySelected: req.body.daySelected
      },
      {
        where: {
          id: req.body.id
        }
      }
    ).then(function(dbParent) {
      res.json(dbParent);
      console.log("Day Selected updated!");
    });
  });

  //Get Sitters where daySelected matches
  app.get("/api/sitters", function(req, res) {
    db.Sitter.findAll({
      where: {
        daySelected: req.body.daySelected,
        zipcode: req.body.zipcode
      }
    }).then(function(dbSitter) {
      res.json(dbSitter);
    });
  });

  //Post new Sitter row
  app.post("/api/sitters", function(req, res) {
    db.Sitter.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      pic: req.body.pic,
      knowsCPR: req.body.knowsCPR,
      petsOK: req.body.petsOK,
      hasReferences: req.body.hasReferences,
      hasTransportation: req.body.hasTransportation,
      comments: req.body.comments,
      zipcode: req.body.zipcode,
      daySelected: req.body.daySelected
    }).then(function(dbSitter) {
      res.json(dbSitter);
      console.log("New Sitter Added");
    });
  });

  //Update Sitter daySelected
  app.put("/api/sitters/:id", function(req, res) {
    db.Sitter.update(
      {
        daySelected: req.body.daySelected
      },
      {
        where: {
          id: req.body.id
        }
      }
    ).then(function(dbSitter) {
      res.json(dbSitter);
      console.log("Day Selected Updated");
    });
  });

  // Check for login
  app.put("/api/sitters/login", function(rep, res) {
    db.Sitter.findOne({
      where: {
        email: req.body.email,
        password: req.body.password
      }
    }).then(function(dbParent) {
      if (dbParent === null) {
        alert("Email and Password do not match.");
      } else {
        res.json(dbParent);
        // redirect to update availability
      }
    });
  });
};
