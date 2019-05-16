// Get references to parent-flow page elements
var $findSitterBtn = $("#findSitter");
// var $firstName = $("#firstName");
// var $lastName = $("#lastName");
// var $email = $("#email");
// var $password = $("#password");
// var $pic = $("#pic");
var $zipCode = $("#zipCode");
//var $numKids = $("#numKids");
//var $hasPets = $("#hasPets");
//var $giveTransport = $("#giveTransport");
//var $comments = $("#comments");
var $parentGetsitterBtn = $("#parent-submit");

// Get references to sitter-flow page elements
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

  // deleteExample: function(id) {
  //   return $.ajax({
  //     url: "api/sitters/" + id,
  //     type: "DELETE"
  //   });
  // }
};

// refreshExamples gets new examples from the db and repopulates the list
// var refreshExamples = function() {
//   API.getExamples().then(function(data) {
//     var $examples = data.map(function(example) {
//       var $a = $("<a>")
//         .text(example.text)
//         .attr("href", "/example/" + example.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": example.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $exampleList.empty();
//     $exampleList.append($examples);
//   });
// };

// Function to go to parent form
var parentSubmit = function(event) {
  event.preventDefault();

  API.goToParent;
};

// Function to return parent Zipcode and go to Result page
var parentFormSubmit = function(event, cb) {
  event.preventDefault();

  var parentData = {
    zipCode: $zipCode.val().trim()
  };

  API.getSitters;
  cb(parentData);
};

//

var handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);
$findSitterBtn.on("click", parentSubmit);
$parentGetsitterBtn.on("click", parentFormSubmit);
