$(document).ready(function() {
  //Hide function
  var hidden = function() {
    $(".hidden").hide();
    $(".actionButton").hide();
  };
  hidden();

  //Start Button function
  $(".start").click(function() {
    $(this).hide();
    $(".hidden").show();
    $(".actionButton").show();
  });
});
