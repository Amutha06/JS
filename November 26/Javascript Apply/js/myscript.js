const person = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
const person1 = {
    firstName: "John",
    lastName: "Doe"
}
const person2 = {
    firstName: "Mary",
    lastName: "Doe"
}
document.getElementById("demo").innerHTML = person.fullName.apply(person1);

const person0 = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + ", " + city + ", " + country;
    }
}
document.getElementById("demo1").innerHTML = person0.fullName.apply(person1, ["Oslo", "Norway"]);

document.getElementById("demo2").innerHTML = person0.fullName.call(person2, "Oslo", "Norway");

document.getElementById("demo3").innerHTML = Math.max.apply(null, [1,2,3]); 

document.getElementById("demo4").innerHTML = Math.max.apply(Math, [1,2,3]); 

document.getElementById("demo5").innerHTML = Math.max.apply(0, [1,2,3]); 


