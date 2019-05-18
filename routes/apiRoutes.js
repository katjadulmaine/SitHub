var db = require("../models");
//var daySelected = require("../public/js") Assuming code to get sitter day of week will live with the other form value code.

module.exports = function(app) {
  //Get Parents where daySelected matches
  app.get("/api/parents", function(req, res) {
    db.Parent.findAll({
      where: {
        daySelected: req.body.daySelected,
        zipCode: req.body.zipCode
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
      zipCode: req.body.zipCode,
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
    // req.query.daySelected
    let day = req.query.daySelected
    db.Sitter.findAll({
      where: {
      [day]: true
      },
      zipCode: req.query.zipCode
      
    }).then(function(dbSitter) {
      res.render("result", {
        sitter: dbSitter
      });
    });
  });
  //Post new Sitter row
  app.post("/api/sitters", function(req, res) {
    console.log("hit");
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
      zipCode: req.body.zipCode,
      d1: req.body.d1,
      d2: req.body.d2,
      d3: req.body.d3,
      d4: req.body.d4,
      d5: req.body.d5,
      d6: req.body.d6,
      d7: req.body.d7
    }).then(function(dbSitter) {
      res.json(dbSitter);
      //res.send("hi");
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
