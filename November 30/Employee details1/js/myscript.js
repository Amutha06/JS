var myjsonObj = '[{"firstname":"Amutha", "lastname":"C"},{"firstname":"Ajay","lastname":"A"}]';
var jsObj = JSON.parse(myjsonObj);

console.log(jsObj[1].firstname);
console.log(jsObj[1].lastname);

var employeesArray = [];

function init() {
    if (localStorage.employeesRecord) {
        employeesArray = JSON.parse(localStorage.employeesRecord);
        for (var i = 0; i < employeesArray.length; i++) {
            var firstName = employeesArray[i].firstname;
            var lastName = employeesArray[i].lastname;
            var empId = employeesArray[i].empid;
            var designation = employeesArray[i].designation;
            prepareTableCell(firstName, lastName, empId, designation);
        }
    }

}

function onSave() {
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var empId = document.getElementById("empid").value;
    var designation = document.getElementById("designation").value;

    var empObj = { firstname: firstName, lastname: lastName, empid: empId, designation: designation };
    employeesArray.push(empObj);

    localStorage.employeesRecord = JSON.stringify(employeesArray);

    prepareTableCell(firstName, lastName, empId, designation);

    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("empid").value = "";
    document.getElementById("designation").value = "";
}

function prepareTableCell(firstName, lastName, empId, designation) {

    var table = document.getElementById("emptable");
    var row = table.insertRow();
    var firstNameCell = row.insertCell(0);
    var lastNameCell = row.insertCell(1);
    var empIdCell = row.insertCell(2);
    var designationCell = row.insertCell(3);

    firstNameCell.innerHTML = firstName;
    lastNameCell.innerHTML = lastName;
    empIdCell.innerHTML = empId;
    designationCell.innerHTML = designation;
}