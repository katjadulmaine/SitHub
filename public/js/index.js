// Get references to parent-flow page elements
var $findSitterBtn = $("#findSitter");
// var $firstName = $("#firstName");
// var $lastName = $("#lastName");
// var $email = $("#email");
// var $password = $("#password");
// var $pic = $("#pic");
var $zipCode = $("#zipCode");
var $daySelectedParent = $("#daySelectedParent");
//var $numKids = $("#numKids");
//var $hasPets = $("#hasPets");
//var $giveTransport = $("#giveTransport");
//var $comments = $("#comments");
var $parentGetsitterBtn = $("#parent-submit");

// Get references to sitter-flow page elements
var $sitterSubmit = $("#sitterSubmit");
var $firstNameSitter = $("#firstNameSitter");
var $lastNameSitter = $("#lastNameSitter");
var $emailSitter = $("#emailSitter");
var $passwordSitter = $("#passwordSitter");
var $picSitter = $("#picSitter");
var $zipCodeSitter = $("#zipCodeSitter");
var $cprYes = $("#cprYes");
var $referencesYes = $("#referencesYes");
var $petsYes = $("#petsYes");
var $carYes = $("#carYes");
var $commentSitter = $("#commentSitter");
var $daySelectedSitter = $("#daySelectedSitter");
var $addSitterBtn = $("#sitter-submit");

// The API object contains methods for each kind of request we'll make
var API = {
  //Create request to load parent form

  goToParent: function() {
    return $.ajax({
      url: "/parent",
      type: "GET"
    });
  },

  //Request to add a new sitter
  createSitter: function(sitter) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/sitters",
      data: JSON.stringify(sitter)
    });
  },

  //Request to return sitters where daySelected and zipcode match
  getSitters: function() {
    return $.ajax({
      url: "api/sitters",
      type: "GET"
    });
  },

  //Request to get sitter Parent chooses to contact
  getChosenSitter: function(id) {
    return $.ajax({
      url: "api/sitters/" + id,
      type: "GET"
    });
  },

  //route to sitter intake form
  goToSitter: function() {
    return $.ajax({
      url: "/sitter",
      type: "GET"
    });
  }
};

// Function to go to parent form
var parentSubmit = function(event) {
  event.preventDefault();

  API.goToParent;
};

// Function to return parent Zipcode and go to Result page
var parentFormSubmit = function(event, cb) {
  event.preventDefault();

  var parentData = {
    zipCode: $zipCode.val().trim(),
    daySelected: $daySelectedParent.val().trim()
  };

  API.getSitters;
  cb(parentData);
};

//NEED TO ADD A FUNCTION TO GET SITTER DATA FOR RESULT LIST;

//Function to go to sitter form
var sitterSubmit = function(event) {
  event.prevenDefault();

  API.goToSitter;
};

//Function to add sitter
var addSitter = function(event) {
  event.preventDefault();

  // New sitter object
  var newSitter = {
    firstName: $firstNameSitter.val().trim(),
    lastName: $lastNameSitter.val().trim(),
    email: $emailSitter.val().trim(),
    password: $passwordSitter.val().trim(),
    pic: $picSitter.val().trim(),
    knowsCPR: $cprYes.val().trim(),
    petsOK: $petsYes.val().trim(),
    hasReferences: $referencesYes.val().trim(),
    hasTransportation: $carYes.val().trim(),
    comments: $commentSitter.val().trim(),
    zipCode: $zipCodeSitter.val().trim(),
    //this will fail until we can get a day selected value
    daySelected: $daySelectedSitter.val().trim()
  };

  API.createSitter(newSitter).then(function(data) {
    console.log(data);
  });
};

// modal
$(document).ready(function() {
  $(".modal").modal();
  modalPop = function() {
    $("#modal1").modal("open");
  };
  setTimeout(modalPop, 1500);
  console.log("modal working");
});

// parent form click function
$("#form1").click(function() {
  $("#parent").toggle();
  $("#main").hide();
  $(".modal-content").hide();
  $("#sitterOrParent").hide();
  $("#sitter").hide();
  $("#mainPage").hide();
  $("footer").hide();
});
// sitter form click function
$("#form2").click(function() {
  $("#sitter").toggle();
  $("#main").hide();
  $("#modal1").hide();
  $("#sitterOrParent").hide();
  $("#parent").hide();
  $("#mainPage").hide();
  $("footer").hide();
});
// Add event listeners to the submit and nav buttons
$findSitterBtn.on("click", parentSubmit);
$parentGetsitterBtn.on("click", parentFormSubmit);
$sitterSubmit.on("click", sitterSubmit);
$addSitterBtn.on("click", addSitter);
