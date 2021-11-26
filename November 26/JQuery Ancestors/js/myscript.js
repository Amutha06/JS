$(document).ready(function(){
    $("#span1").parent().css({"color": "red", "border": "2px solid red"});
  });

  $(document).ready(function(){
    $("#span2").parents().css({"color": "red", "border": "2px solid red"});
  });

  $(document).ready(function(){
    $("#span3").parentsUntil("div").css({"color": "red", "border": "2px solid red"});
  });