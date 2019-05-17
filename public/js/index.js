// var $zipCode = $("#zipCode");
// var $daySelectedParent = $("#daySelectedParent");
// var $parentGetsitterBtn = $("#parent-submit");

// // Get references to sitter-flow page elements
// //var $sitterSubmit = $("#sitterSubmit");
// var $firstNameSitter = $("#firstNameSitter");
// var $lastNameSitter = $("#lastNameSitter");
// var $emailSitter = $("#emailSitter");
// var $passwordSitter = $("#passwordSitter");
// var $picSitter = $("#picSitter");
// var $zipCodeSitter = $("#zipCodeSitter");
// var cpr;
// var refs;
// var pets;
// var transportation;
// var $commentSitter = $("#commentSitter");
// // var $daySelectedSitter = $("#daySelectedSitter");

// function validate() {
//   if (document.getElementById('yesPets').checked) {
//     pets = true;
//   } else {
//     pets = false
//   }
//   if (document.getElementById('yesCPR').checked) {
//     cpr = true;
//   } else {
//     cpr = false
//   }
//   if (document.getElementById('yesRefs').checked) {
//     refs = true;
//   } else {
//     refs = false
//   }
//   if (document.getElementById('yesTrans').checked) {
//     transportation = true;
//   } else {
//     tansportation = false
//   }

// }
//   // New sitter object
//   var newSitter = {
//     firstName: $firstNameSitter.val().trim(),
//     lastName: $lastNameSitter.val().trim(),
//     email: $emailSitter.val().trim(),
//     password: $passwordSitter.val().trim(),
//     pic: $picSitter.val().trim(),
//     knowsCPR: cpr,
//     petsOK: pets,
//     hasReferences: refs,
//     hasTransportation: transportation,
//     comments: $commentSitter.val().trim(),
//     zipCode: $zipCodeSitter.val().trim(),
//     daySelected: values
//   };

// $("#sitter-submit").on('click', function (event) {
//   event.preventDefault();
//   validate();
//   var values = $('.selectedStuff').val()
//   console.log(values)
//   $.ajax({
//     type: "POST",
//     url: "/api/sitters",
//     data: newSitter,
//     contentType: "application/json; charset=utf-8",
//     dataType: "json",
//   });
// });

//Request to add a new sitter
// createSitter: function(sitter) {
//   return $.ajax({
//     headers: {
//       "Content-Type": "application/json"
//     },
//     type: "POST",
//     url: "api/sitters",
//     data: JSON.stringify(sitter)
//   });
// },

//Request to return sitters where daySelected and zipcode match
// getSitters: function() {
//   return $.ajax({
//     url: "api/sitters",
//     type: "GET"
//   });
// },

//Request to get sitter Parent chooses to contact
// getChosenSitter: function(id) {
//   return $.ajax({
//     url: "api/sitters/" + id,
//     type: "GET"
//   });
// }
// Function to return parent Zipcode and go to Result page
// var parentFormSubmit = function (event, cb) {
//   event.preventDefault();

//   var parentData = {
//     zipCode: $zipCode.val().trim(),
//     daySelected: $daySelectedParent.val().trim()
//   };

//   API.getSitters;
//   cb(parentData);
// };

//NEED TO ADD A FUNCTION TO GET SITTER DATA FOR RESULT LIST;

//Function to go to sitter form
// var sitterSubmit = function (event) {
//   event.prevenDefault();

//   API.goToSitter;
// };

//Function to add sitter
// var addSitter = function (event) {
//   event.preventDefault();

//   // New sitter object
//   var newSitter = {
//     firstName: $firstNameSitter,
//     lastName: $lastNameSitter,
//     email: $emailSitter,
//     password: $passwordSitter,
//     pic: $picSitter,
//     knowsCPR: cpr,
//     petsOK: pets,
//     hasReferences: refs,
//     hasTransportation: transportation,
//     comments: $commentSitter,
//     zipCode: $zipCodeSitter,
//     daySelected: values
//   };

//   API.createSitter(newSitter).then(function (data) {
//     console.log(data);
//   });
// };

// modal
var timeId;

function modalPop() {
  $(".modal").modal();
  $("#modal1").modal("open");
}

function startModal() {
  timeId = setTimeout(modalPop, 1500);
}

function stopModal() {
  clearTimeout(timeId);
}

$(document).ready(function() {
  modalPop();
  startModal();
  stopModal();
});

// $(document).ready(function() {
//   $(".modal").modal();
//   modalPop = function() {
//     $("#modal1").modal("open");
//   };
//   setTimeout(modalPop, 1500);
//   console.log("modal working");
// });

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
