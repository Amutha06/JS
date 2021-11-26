$(document).ready(function(){
    $("div").first().css("background-color", "yellow");
  });
  
  $(document).ready(function(){
    $("div").last().css("background-color", "Orange");
  });
  
  $(document).ready(function(){
    $("p").eq(0).css("background-color", "blue");
  });

  $(document).ready(function(){
    $("p").filter(".intro").css("background-color", "blueviolet");
  });

  $(document).ready(function(){
    $("p").not(".intro").css("background-color", "pink");
  });