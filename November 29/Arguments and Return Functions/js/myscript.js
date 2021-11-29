function myFunction(x, y) {
    if (y === undefined) {
        y = 2;
    }
    return x * y;
}
document.getElementById("demo").innerHTML = myFunction(4);


function findMax() {
    let max = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}
document.getElementById("demo1").innerHTML = findMax(4, 5, 6);


function sumAll() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
document.getElementById("demo2").innerHTML = sumAll(1, 123, 500, 115, 44, 88);


function myFunction1() {
    return Math.PI;
}

document.getElementById("demo3").innerHTML = myFunction1();


function myFunction2(name) {
    return "Hello " + name;
}
document.getElementById("demo4").innerHTML = myFunction2("John");


var z = myFunction(4, 3); 
function myFunction(a, b) {
  return a * b;   
}  
document.getElementById("demo5").innerHTML = z;