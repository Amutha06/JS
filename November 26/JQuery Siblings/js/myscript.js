$(document).ready(function(){
    $("#h").siblings().css({"color": "red", "border": "2px solid red"});
  });

  $(document).ready(function(){
    $("#h1").siblings("p").css({"color": "red", "border": "2px solid red"});
  });

  $(document).ready(function(){
    $("#h2").next().css({"color": "red", "border": "2px solid red"});
  });

  $(document).ready(function(){
    $("#h3").nextAll().css({"color": "red", "border": "2px solid red"});
  });

  $(document).ready(function(){
    $("#h4").nextUntil("#h5").css({"color": "red", "border": "2px solid red"});
  });