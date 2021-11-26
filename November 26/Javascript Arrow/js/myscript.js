let myFunction = (a, b) => a * b;
document.getElementById("demo").innerHTML = myFunction(4, 5);

var hello;
hello = () => "Hello World!";
document.getElementById("demo1").innerHTML = hello();

var hello1
hello1 = (val) => "Hello " + val;
document.getElementById("demo2").innerHTML = hello1("Universe!");

var hello2;
hello2 = val => "Hello " + val;
document.getElementById("demo3").innerHTML = hello2("India!");

var hello3;
hello3 = () => {
  document.getElementById("demo4").innerHTML += this;
}
//The window object calls the function:
window.addEventListener("load", hello3);
//A button object calls the function:
document.getElementById("btn").addEventListener("click", hello3);
