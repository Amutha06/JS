$(document).ready(function () {
    $("#btn1").click(function () {
        alert("Text: " + $("#test").text());
    });
    $("#btn2").click(function () {
        alert("HTML: " + $("#test").html());
    });
});

$(document).ready(function () {
    $("#btn3").click(function () {
        alert("Value: " + $("#test1").val());
    });
});

$(document).ready(function () {
    $("#btn4").click(function () {
        alert($("#w3s").attr("href"));
    });
});

$(document).ready(function () {
    $("#btn5").click(function () {
        $("#test2").text("Hello world!");
    });
    $("#btn6").click(function () {
        $("#test3").html("<b>Hello world!</b>");
    });
    $("#btn7").click(function () {
        $("#test4").val("Dolly Duck");
    });
});

$(document).ready(function () {
    $("#btn8").click(function () {
        $("#test5").text(function (i, origText) {
            return "Old text: " + origText + " New text: Hello world! (index: " + i + ")";
        });
    });

    $("#btn9").click(function () {
        $("#test6").html(function (i, origText) {
            return "Old html: " + origText + " New html: Hello <b>world!</b> (index: " + i + ")";
        });
    });
});

$(document).ready(function () {
    $("#btn10").click(function () {
        $("#w3s1").attr({
            "href": "https://www.w3schools.com/jquery/",
            "title": "W3Schools jQuery Tutorial"
        });
    });
});

$(document).ready(function () {
    $("#btn11").click(function () {
        $("#p1").append(" <b>Appended text</b>.");
    });

    $("#btn12").click(function () {
        $("#ol1").append("<li>Appended item</li>");
    });
});

$(document).ready(function () {
    $("#btn13").click(function () {
        $("#p2").prepend("<b>Prepended text</b>. ");
    });
    $("#btn14").click(function () {
        $("#ol2").prepend("<li>Prepended item</li>");
    });
});

$(document).ready(function () {
    $("#btn15").click(function () {
        $("img").before("<b>Before</b>");
    });

    $("#btn16").click(function () {
        $("img").after("<i>After</i>");
    });
});

$(document).ready(function () {
    $("#btn17").click(function () {
        $("#div1").remove();
    });
});

$(document).ready(function () {
    $("#btn18").click(function () {
        $("#div2").empty();
    });
});

$(document).ready(function () {
    $("#btn19").click(function () {
        $("p").remove(".test");
    });
});

$(document).ready(function () {
    $("#btn20").click(function () {
        $("#div3").addClass("important blue");
    });
});

$(document).ready(function () {
    $("#btn21").click(function () {
        $("#head1, #head2").removeClass("blue");
    });
});

$(document).ready(function () {
    $("#btn22").click(function () {
        $("#head3, #head4").toggleClass("blue");
    });
});

$(document).ready(function () {
    $("#btn23").click(function () {
        alert("Background color = " + $(".pa1").css("background-color"));
    });
});

$(document).ready(function () {
    $("#btn24").click(function () {
        $(".pa2").css("background-color", "yellow");
    });
});

$(document).ready(function () {
    $("#btn25").click(function () {
        $(".pa3").css({ "background-color": "yellow", "font-size": "200%" });
    });
});

$(document).ready(function () {
    $("#btn26").click(function () {
        var txt = "";
        txt += "Width of div: " + $("#div5").width() + "</br>";
        txt += "Height of div: " + $("#div5").height() + "</br>";
        txt += "Inner width of div: " + $("#div5").innerWidth() + "</br>";
        txt += "Inner height of div: " + $("#div5").innerHeight() + "</br>";
        txt += "Outer width of div: " + $("#div5").outerWidth() + "</br>";
        txt += "Outer height of div: " + $("#div5").outerHeight();
        $("#div5").html(txt);
    });
});