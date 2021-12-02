function myFunction() {
    location.replace("itemreport.html")
  }
  function myFunction1(){
      location.replace("addfood.html")
  }
  function myFunction2(){
      location.replace("addsells.html")
  }
  function myFunction3(){
    location.replace("sellsreport.html")
  }
  function myFunction4(){
      location.replace("index.html")
  }

  var sellsArray = [];

function init() {
    if (localStorage.sellsRecord) {
        sellsArray = JSON.parse(localStorage.sellsRecord);
        for (var i = 0; i < sellsArray.length; i++) {
            prepareTableCell(i, sellsArray[i].customername, sellsArray[i].contact, sellsArray[i].status, sellsArray[i].orderamount);
        }
    }
}

function onSave() {
    sellsArray = JSON.parse(localStorage.getItem('sellsRecord')); 
    var customerName = document.getElementById("customername").value;
    var contact = document.getElementById("contact").value;
    var status = document.getElementById("status").value;
    var orderAmount = document.getElementById("orderamount").value;
    var sellObj = { customername: customerName, contact: contact, status: status, orderamount: orderAmount };
        sellsArray.push(sellObj);
        localStorage.setItem('sellsRecord', JSON.stringify(sellsArray));
        init();
}

function prepareTableCell(index, customerName, contact, status, orderAmount) {

    var table = document.getElementById("tablerows1");
    var row = table.insertRow();
    var customerNameCell = row.insertCell(0);
    var contactCell = row.insertCell(1);
    var statusCell = row.insertCell(2);
    var orderAmountCell = row.insertCell(3);
    var actionsCell = row.insertCell(4);

    customerNameCell.innerHTML = customerName;
    contactCell.innerHTML = contact;
    statusCell.innerHTML = status;
    orderAmountCell.innerHTML = orderAmount;
    actionsCell.innerHTML = '<button class="btn btn-info" onclick="onEdit(' + index + '); myFuction2()">Edit</button>&nbsp;<button class="btn btn-danger" onclick="onDelete(' + index + ')">Delete</button>';
}

function onDelete(index) {
    sellsArray.splice(index, 1);
    localStorage.sellsRecord = JSON.stringify(sellsArray);
    init();
}

function onClear() {
    selectedIndex = -1;
    document.getElementById("customername").value = "";
    document.getElementById("contact").value = "";
    document.getElementById("status").value = "";
    document.getElementById("orderamount").value = "";
    document.getElementById("submit").innerHTML = "Save";
}

var selectedIndex = -1;

function onEdit(index) {
    selectedIndex = index;
    var sellObj = sellsArray[index];
    document.getElementById("customername").value = sellObj.customername;
    document.getElementById("contact").value = sellObj.contact;
    document.getElementById("status").value = sellObj.status;
    document.getElementById("orderamount").value = sellObj.orderamount;
    document.getElementById("submit").innerHTML = "Update";
}



