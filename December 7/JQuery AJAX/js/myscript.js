$(document).ready(function(){
    $("#btn1").click(function(){
      $("#div1").load("demo.html");
    });
  });

  $(document).ready(function(){
    $("#btn2").click(function(){
      $("#div2").load("demo.html #p1");
    });
  });

  $(document).ready(function(){
    $("#btn3").click(function(){
      $("#div3").load("demo.html #p2", function(responseTxt, statusTxt, xhr){
        if(statusTxt == "success")
          alert("External content loaded successfully!");
        if(statusTxt == "error")
          alert("Error: " + xhr.status + ": " + xhr.statusText);
      });
    });
  });

  $(document).ready(function(){
    $("#btn4").click(function(){
      $.get("demo.html", function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
      });
    });
  });

 