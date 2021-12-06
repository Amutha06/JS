function myFunction() {
    window.location = "itemreport.html";
}
function myFunction1(rowIndex) {
    window.location = "addfood.html?rowIndex=" + rowIndex;
}
function myFunction2() {
    window.location = "addsells.html";
}
function myFunction3() {
    window.location = "sellsreport.html"
}
function myFunction4() {
    window.location = "index.html";
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
    foodArray = JSON.parse(localStorage.getItem('foodRecord'));
    var productCode = document.getElementById("productcode").value;
    var foodTitle = document.getElementById("foodtitle").value;
    var type = document.getElementById("type").value;
    var price = document.getElementById("price").value;
    var foodObj = { productcode: productCode, foodtitle: foodTitle, type: type, price: price };
    foodArray.push(foodObj);
    localStorage.setItem('foodRecord', JSON.stringify(foodArray));
    init();
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
    actionsCell.innerHTML = `<button class="btn btn-info" onclick="onEdit(${index})">Edit</button>&nbsp;<button class="btn btn-danger" onclick="onDelete(' + index + ')">Delete</button>`;
}

function onDelete(index) {
    foodArray.splice(index, 1);
    localStorage.setItem('foodRecord', JSON.stringify(foodArray));
    init();
}

function onClear() {
    document.getElementById("productcode").value = "";
    document.getElementById("foodtitle").value = "";
    document.getElementById("type").value = "";
    document.getElementById("price").value = "";
    document.getElementById("submit").innerHTML = "Save";
}  

// function createDynamicURL()
// {
//     var URL;
//     var productcodeID=productcode;
//     var foodtitleID= foodtitle;
//     var typeID=type;
//     var priceID=price;

//     URL+="productcode=";
//     URL+=productcodeID;
//     URL+="/foodtitle=";
//     URL+=foodtitleID;
//     URL+="/type=";
//     URL+=typeID;
//     URL+="/price";
//     URL+=priceID;
//     URL+="/info";

//     return URL;
// }

function onEdit(index) {
    myFunction1(index);

    // window.location= createDynamicURL();
    // console.log("values", productcode, foodtitle, type, price);
    // var url_str = window.location.search;
    // let url = new URL(url_str);
    // var search_params = url.searchParams;
    // search_params.forEach(function(value, key) {
    //     console.log(key + '=' + value);
    // });
    // var selectedIndex = -1;
    // selectedIndex = index;

    // var foodObj = foodArray[index];

    // // var foodArray = foodArray.map(function(productcode) {
    // //     return JSON.parse(localStorage.getItem(productcode));
    // //   });

    // document.getElementById("productcode").value = foodObj.productcode;
    // document.getElementById("foodtitle").value = foodObj.foodtitle;
    // document.getElementById("type").value = foodObj.type;
    // document.getElementById("price").value = foodObj.price;
    // document.getElementById("submit").innerHTML = "Update";

}