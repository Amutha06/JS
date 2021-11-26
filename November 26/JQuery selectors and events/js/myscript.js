//element selector
$(document).ready(function(){
    $("button").click(function(){
      $("h6").hide();
    });
  });

  
  $(document).ready(function(){
    $("span").dblclick(function(){
      $(this).hide();
    });
  });

  //id selector
  $(document).ready(function(){
    $("#p1").mouseenter(function(){
      alert("You entered p1!");
    });
  });

  $(document).ready(function(){
    $("#p2").mouseleave(function(){
      alert("Bye! You now leave p!");
    });
  });

  $(document).ready(function(){
    $("#p3").mousedown(function(){
      alert("Mouse down over p!");
    });
  });

  $(document).ready(function(){
    $("#p4").mouseup(function(){
      alert("Mouse up over p!");
    });
  });

  $(document).ready(function(){
    $("#p5").hover(function(){
      alert("You entered p!");
    },
    function(){
      alert("Bye! You now leave p!");
    }); 
  });

  $(document).ready(function(){
    $("input").focus(function(){
      $(this).css("background-color", "yellow");
    });
    $("input").blur(function(){
      $(this).css("background-color", "green");
    });
  });

  $(document).ready(function(){
    $("#p6").on("click", function(){
      $(this).hide();
    });
  });

  $(document).ready(function(){
    $(".test").on({
      mouseenter: function(){
        $(this).css("background-color", "lightgray");
      },  
      mouseleave: function(){
        $(this).css("background-color", "lightblue");
      }, 
      click: function(){
        $(this).css("background-color", "yellow");
      }  
    });
  });


















