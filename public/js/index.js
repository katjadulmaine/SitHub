$(document).ready(function() {
  $(".modal").modal();
  modalPop = function() {
    $("#modal1").modal("open");
  };
  setTimeout(modalPop, 1500);
  $("#modal1").hide();
  console.log("modal working");
<<<<<<< HEAD
  // $(".modal-content").hide();
})
    $("#cancel-modal").click(function() {
      $("#modal1").close();
    )};

// // parent form click function
// $("#form1").click(function() {
//   $("#parent").toggle();
//   $("#main").hide();
//   $(".modal-content").hide();
//   $("#sitterOrParent").hide();
//   $("#sitter").hide();
//   $("#mainPage").hide();
//   $("footer").hide();
// });
// // sitter form click function
// $("#form2").click(function() {
//   $("#sitter").toggle();
//   $("#main").hide();
//   $("#modal1").hide();
//   $("#sitterOrParent").hide();
//   $("#parent").hide();
//   $("#mainPage").hide();
//   $("footer").hide();
// });
=======
  $(".modal-close").on("click", function() {
    event.preventDefault();
  });
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
>>>>>>> adc189c1b7af90cffd81a98f146e89745b3b03ee
