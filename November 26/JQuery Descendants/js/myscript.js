$(document).ready(function(){
    $("#child").children().css({"color": "red", "border": "2px solid red"});
  });

  $(document).ready(function(){
    $("#child1").children("p.first").css({"color": "red", "border": "2px solid red"});
  });

  $(document).ready(function(){
    $("#child2").find("span").css({"color": "red", "border": "2px solid red"});
  });

  $(document).ready(function(){
    $("#child3").find("*").css({"color": "red", "border": "2px solid red"});
  });