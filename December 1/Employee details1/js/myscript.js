var employeesArray = [];

function init() {
    document.getElementById("tablerows").innerHTML = "";
    if (localStorage.employeesRecord) {
        employeesArray = JSON.parse(localStorage.employeesRecord);
        for (var i = 0; i < employeesArray.length; i++) {
            prepareTableCell(i, employeesArray[i].firstname, employeesArray[i].lastname, employeesArray[i].empid, employeesArray[i].designation);
        }
    }
}

function onSave() {
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var empId = document.getElementById("empid").value;
    var designation = document.getElementById("designation").value;
    var empObj = { firstname: firstName, lastname: lastName, empid: empId, designation: designation };
    if (selectedIndex === -1) {
        employeesArray.push(empObj);
    } 
    else {
        employeesArray.splice(selectedIndex,1,empObj);
    }
    localStorage.employeesRecord = JSON.stringify(employeesArray);
    init();

    onClear();
}

function prepareTableCell(index, firstName, lastName, empId, designation) {

    var table = document.getElementById("tablerows");
    var row = table.insertRow();
    var firstNameCell = row.insertCell(0);
    var lastNameCell = row.insertCell(1);
    var empIdCell = row.insertCell(2);
    var designationCell = row.insertCell(3);
    var actionsCell = row.insertCell(4);

    firstNameCell.innerHTML = firstName;
    lastNameCell.innerHTML = lastName;
    empIdCell.innerHTML = empId;
    designationCell.innerHTML = designation;
    actionsCell.innerHTML = '<button class="btn btn-info" onclick="onEdit(' + index + ')">Edit</button>&nbsp;<button class="btn btn-danger" onclick="onDelete(' + index + ')">Delete</button>';
}

function onDelete(index) {
    // var table = document.getElementById("emptable");
    // table.deleteRow(index + 1);
    employeesArray.splice(index, 1);
    localStorage.employeesRecord = JSON.stringify(employeesArray);
    init();
}

function onClear() {
    selectedIndex = -1;
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("empid").value = "";
    document.getElementById("designation").value = "";
    document.getElementById("submit").innerHTML = "Save";
}

var selectedIndex = -1;

function onEdit(index) {
    selectedIndex = index;
    var empObj = employeesArray[index];
    document.getElementById("firstname").value = empObj.firstname;
    document.getElementById("lastname").value = empObj.lastname;
    document.getElementById("empid").value = empObj.empid;
    document.getElementById("designation").value = empObj.designation;
    document.getElementById("submit").innerHTML = "Update";
}


function validateform(){  
    var fname=document.myform.fnamme.value;  
      
    if (fname==null || fname==""){  
      alert("Name can't be blank");  
      return false;  
    }
}