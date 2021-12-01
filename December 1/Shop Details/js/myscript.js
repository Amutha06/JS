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

  var foodArray = [];

function init() {
    if (localStorage.foodRecord) {
        foodArray = JSON.parse(localStorage.foodRecord);
        for (var i = 0; i < foodArray.length; i++) {
            prepareTableCell(i, foodArray[i].productcode, foodArray[i].foodtitle, foodArray[i].type, foodArray[i].price);
        }
    }
}

function onSave() {
    var productCode = document.getElementById("productcode").value;
    var foodTitle = document.getElementById("foodtitle").value;
    var type = document.getElementById("type").value;
    var price = document.getElementById("price").value;
    var foodObj = { productcode: productCode, foodtitle: foodTitle, type: type, price: price };
    if (selectedIndex === -1) {
        foodArray.push(foodObj);
    } 
    else {
        foodArray.splice(selectedIndex,1,foodObj);
    }
    localStorage.foodRecord = JSON.stringify(foodArray);
    init();

    onClear();
}

function prepareTableCell(index, productCode, foodTitle, type, price) {

    var table = document.getElementById("tablerows");
    var row = table.insertRow();
    var productCodeCell = row.insertCell(0);
    var foodTitleCell = row.insertCell(1);
    var typeCell = row.insertCell(2);
    var priceCell = row.insertCell(3);
    var actionsCell = row.insertCell(4);

    productCodeCell.innerHTML = productCode;
    foodTitleCell.innerHTML = foodTitle;
    typeCell.innerHTML = type;
    priceCell.innerHTML = price;
    actionsCell.innerHTML = '<button class="btn btn-info" onclick="onEdit(' + index + '); myFunction1()">Edit</button>&nbsp;<button class="btn btn-danger" onclick="onDelete(' + index + ')">Delete</button>';
}

function onDelete(index) {
    foodArray.splice(index, 1);
    localStorage.foodRecord = JSON.stringify(foodArray);
    init();
}

function onClear() {
    selectedIndex = -1;
    document.getElementById("productcode").value = "";
    document.getElementById("foodtitle").value = "";
    document.getElementById("type").value = "";
    document.getElementById("price").value = "";
    document.getElementById("submit").innerHTML = "Save";
}

var selectedIndex = -1;

function onEdit(index) {
    selectedIndex = index;
    var foodObj = foodArray[index];
    
    document.getElementById("productcode").value = foodObj.productcode;
    document.getElementById("foodtitle").value = foodObj.foodtitle;
    document.getElementById("type").value = foodObj.type;
    document.getElementById("price").value = foodObj.price;
    document.getElementById("submit").innerHTML = "Update";
}
