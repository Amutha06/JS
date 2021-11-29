try {
    adddlert("Welcome guest!");
}
catch (err) {
    document.getElementById("demo").innerHTML = err.message;
}


function myFunction() {
    const message = document.getElementById("p01");
    message.innerHTML = "";
    let x = document.getElementById("demo1").value;
    try {
        if (x == "") throw "empty";
        if (isNaN(x)) throw "not a number";
        x = Number(x);
        if (x < 5) throw "too low";
        if (x > 10) throw "too high";
    }
    catch (err) {
        message.innerHTML = "Input is " + err;
    }
}


let num = 1;
try {
    num.toPrecision(500);
}
catch (err) {
    document.getElementById("demo2").innerHTML = err.name;
}


let a = 5;
try {
    a = b + 1;
}
catch (err) {
    document.getElementById("demo3").innerHTML = err.name;
}


try {
    eval("alert('Hello)");
}
catch (err) {
    document.getElementById("demo4").innerHTML = err.name;
}


let num1 = 1;
try {
    num1.toUpperCase();
}
catch (err) {
    document.getElementById("demo5").innerHTML = err.name;
}

try {
    decodeURI("%%%");
}
catch (err) {
    document.getElementById("demo6").innerHTML = err.name;
}