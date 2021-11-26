$(document).ready(function(){
    $("#hide").click(function(){
      $("p").hide();
    });
    $("#show").click(function(){
      $("p").show();
    });
  });

  $(document).ready(function(){
    $("#hide1").click(function(){
      $("p").hide(1000);
    });
    $("#show1").click(function(){
      $("p").show(1000);
    });
  });

  $(document).ready(function(){
    $("#toggle").click(function(){
      $("#p1").toggle();
    });
  });

  $(document).ready(function(){
    $("#fadein").click(function(){
      $("#div1").fadeIn();
      $("#div2").fadeIn("slow");
      $("#div3").fadeIn(3000);
    });
  });

  $(document).ready(function(){
    $("#fadeout").click(function(){
      $("#div4").fadeOut();
      $("#div5").fadeOut("slow");
      $("#div6").fadeOut(3000);
    });
  });

  $(document).ready(function(){
    $("#toggle1").click(function(){
      $("#div7").fadeToggle();
      $("#div8").fadeToggle("slow");
      $("#div9").fadeToggle(3000);
    });
  });

  $(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideDown("slow");
    });
  });

  $(document).ready(function(){
    $("#flip1").click(function(){
      $("#panel1").slideUp("slow");
    });
  });

  $(document).ready(function(){
    $("#flip2").click(function(){
      $("#panel2").slideToggle("slow");
    });
  });

  $(document).ready(function(){
    $("#button1").click(function(){
      $("#div10").animate({left: '250px'});
    });
  });

  $(document).ready(function(){
    $("#button2").click(function(){
      $("#div11").animate({
        left: '250px',
        opacity: '0.5',
        height: '150px',
        width: '150px'
      });
    });
  });

  $(document).ready(function(){
    $("#button3").click(function(){
      $("#div12").animate({
        left: '250px',
        height: '+=150px',
        width: '+=150px'
      });
    });
  });

  $(document).ready(function(){
    $("#button4").click(function(){
      $("#div13").animate({
        height: 'toggle'
      });
    });
  });

  $(document).ready(function(){
    $("#button5").click(function(){
      var div = $("#div14");
      div.animate({height: '300px', opacity: '0.4'}, "slow");
      div.animate({width: '300px', opacity: '0.8'}, "slow");
      div.animate({height: '100px', opacity: '0.4'}, "slow");
      div.animate({width: '100px', opacity: '0.8'}, "slow");
    });
  });

  $(document).ready(function(){
    $("#button6").click(function(){
      var div = $("#div15");  
      div.animate({left: '100px'}, "slow");
      div.animate({fontSize: '3em'}, "slow");
    });
  });

  $(document).ready(function(){
    $("#flip3").click(function(){
      $("#panel3").slideDown(5000);
    });
    $("#stop").click(function(){
      $("#panel3").stop();
    });
  });

  $(document).ready(function(){
    $("#button7").click(function(){
      $("#para").hide("slow", function(){
        alert("The paragraph is now hidden");
      });
    });
  });

  $(document).ready(function(){
    $("#button8").click(function(){
      $("#para1").css("color", "red")
        .slideUp(2000)
        .slideDown(2000);
    });
  });