$(document).ready(function () {
    $('.modal').modal()
    modalPop=()=>{
        $('.modal').modal('open')
    }
    setTimeout(modalPop,3000)
});
    
    // parent form click function
    $("#modal1").click(function(){
        $("#parent").toggle();
        $(".modal-content").hide();
        $("#sitterOrParent").hide();
        $("#sitter").hide();
        $("#mainPage").hide();
        $("footer").hide();
    });
    // sitter form click function
    $("#form2").click(function(){
        $("#sitter").toggle();
        $("#modal1").hide();
        $("#sitterOrParent").hide();
        $("#parent").hide();
        $("#mainPage").hide();
        $("footer").hide();
    });
