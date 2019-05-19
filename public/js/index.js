$(document).ready(function() {
  $(".modal").modal();
  modalPop = function() {
    $("#modal1").modal("open");
  };
  setTimeout(modalPop, 1500);
  $("#modal1").hide();
  console.log("modal working");
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
