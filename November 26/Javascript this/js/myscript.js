// Create an object:
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

// Display data from the object:
document.getElementById("demo").innerHTML = person.fullName();

let x = this;
document.getElementById("demo1").innerHTML = x;

"use strict";
let y = this;
document.getElementById("demo2").innerHTML = y;

document.getElementById("demo3").innerHTML = myFunction();
function myFunction() {
  return this;
}

"use strict";
document.getElementById("demo4").innerHTML = myFunction1();
function myFunction1() {
  return this;
}


// Create an object:
const person0 = {
    firstName  : "John",
    lastName   : "Doe",
    id     : 5566,
    myFunction2 : function() {
      return this;
    }
  };
  // Display data from the object:
  document.getElementById("demo5").innerHTML = person0.myFunction2();

  const person1 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  const person2 = {
    firstName:"John",
    lastName: "Doe",
  }
  let z = person1.fullName.call(person2); 
  document.getElementById("demo6").innerHTML = z; 