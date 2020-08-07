
var productsContainer;
if (localStorage.getItem("data") == null) {
  productsContainer = [];
}
else {
  productsContainer = JSON.parse(localStorage.getItem("data"));
  displayData();
}
var inputsArray = document.getElementsByClassName("form-control");
function addProduct() {
  var productImage = document.getElementById("productImage").files[0].name;
  var productName = document.getElementById("productName").value;
  var productPrice = document.getElementById("productPrice").value;
  var productCategory = document.getElementById("productCategory").value;
  var productCode = document.getElementById("productCode").value;
  var dashPosition = productCode.search("-");
  var productCompany = productCode.slice(0, dashPosition);
  var productModel = productCode.slice(dashPosition + 1, productCode.length);
  var productDesc = document.getElementById("productDesc").value;

  console.log(productName + "  " + productPrice + "  " + productCategory + "  " + productCode);


  var product = {
    image: productImage,
    name: productName,
    price: productPrice,
    category: productCategory,
    code: productCode,
    company: productCompany,
    model: productModel,
    desc: productDesc,

  };
  console.log(product);
  productsContainer.push(product);
  localStorage.setItem("data", JSON.stringify(productsContainer));
  //  console.log(productsContainer);
  displayData();
  clearForm();
  location.reload();

}


function displayData() {
  var temp1 = "";
  var temp2 = "";
  for (var i = 0; i < productsContainer.length; i++) {

    temp1 += ' <tr class="text-dark" > <th scope="row" class="text-white">' + (i + 1) + '</th> <td  class="table-primary" > ' + productsContainer[i].name +
      '</td>  <td class="table-secondary"> ' + productsContainer[i].price + ' </td>' +
      '</td>  <td class="table-success"> ' + productsContainer[i].category + '</td>' +
      '</td>  <td class="table-info"> ' + productsContainer[i].code + '</td>' +
      '</td>  <td class="table-success"> ' + productsContainer[i].company + '</td>' +
      '</td>  <td class="table-secondary"> ' + productsContainer[i].model + '</td>' +
      '</td>  <td class="table-primary" > ' + productsContainer[i].desc + '</td>' +
      '<td class="table-success" >' + ' <i onclick="showDiv(' + i + ')" class="fas fa-pen mr-4 text-warning"  data-toggle="tooltip" data-placement="Edit" title="Edit"> </i> <i onclick="showMsg()" class="fas fa-trash text-danger" data-toggle="tooltip" data-placement="Delete" title="Delete"></i> </td></tr>';

    document.getElementById("tableBody").innerHTML = temp1;
    temp2 +=
      `<div class="col-lg-3 col-md-6 col-xs-12 ">
<div class="product p-2 m-2 text-center ">
<p class="price">` + productsContainer[i].price + ` EGP</p>  

       <div class="out ">

        <img src="../../Desktop/`+ productsContainer[i].image + `" class=" img-fluid" id="output" width="200" height="200"  >
        </div>
        <p class="p-2 badge badge-warning d-block" > Code : `+ productsContainer[i].code + `

        <h4>`+ productsContainer[i].name + `<span class="ml-3 badge badge-primary">` + productsContainer[i].category + `</span> </h4>
        <p>`+ productsContainer[i].desc + `</p> 
        <div class=" d-block">
        <button onclick="showMsg()" class="btn btn-outline-danger buttons btn-sm"> Delete</button> 
          <button onclick="showDiv(`+ i + `)"  class="btn btn-outline-success buttons btn-sm"> Update</button> 
          </div>
    </div>
</div>`;
    document.getElementById("productsRow").innerHTML = temp2;
  }
}

function clearForm() {

  for (var i = 0; i < inputsArray.length; i++) {
    inputsArray[i].value = "";
  }

}

function searchProducts(term) {
  var temp = ``;
  var temp1 = ``;
  for (var i = 0; i < productsContainer.length; i++) {
    if (productsContainer[i].name.toLowerCase().includes(term.toLowerCase())) {
      temp1 += ' <tr class="text-dark" > <th scope="row" class="text-white">' + (i + 1) + '</th> <td  class="table-primary" > ' + productsContainer[i].name +
        '</td>  <td class="table-secondary"> ' + productsContainer[i].price + ' </td>' +
        '</td>  <td class="table-success"> ' + productsContainer[i].category + '</td>' +
        '</td>  <td class="table-info"> ' + productsContainer[i].code + '</td>' +
        '</td>  <td class="table-success"> ' + productsContainer[i].company + '</td>' +
        '</td>  <td class="table-secondary"> ' + productsContainer[i].model + '</td>' +
        '</td>  <td class="table-primary" > ' + productsContainer[i].desc + '</td> <td class="table-success" >'
        + ' <i onclick="showDiv(' + i + ')" class="fas fa-pen mr-4 text-warning"  data-toggle="tooltip" data-placement="Edit" title="Edit"> </i> <i onclick="showMsg()" class="fas fa-trash text-danger" data-toggle="tooltip" data-placement="Delete" title="Delete"></i> </td></tr>';

      document.getElementById("tableBody").innerHTML = temp1;


      temp +=
        `<div class="col-lg-3 col-md-6 col-xs-12 ">
<div class="product p-2 m-2 text-center ">
<p class="price">` + productsContainer[i].price + ` EGP</p>  

       <div class="out ">

        <img src="../../Desktop/`+ productsContainer[i].image + `" class=" img-fluid" id="output" width="200" height="200"  >
        </div>
        <p class="p-2 badge badge-warning d-block" > Code : `+ productsContainer[i].code + `

        <h4>`+ productsContainer[i].name + `<span class="ml-3 badge badge-primary">` + productsContainer[i].category + `</span> </h4>
        <p>`+ productsContainer[i].desc + `</p> 
        <div class=" d-block">
        <button onclick="showMsg()" class="btn btn-outline-danger buttons btn-sm"> Delete</button> 
          <button onclick="showDiv(`+ i + `)"  class="btn btn-outline-success buttons btn-sm"> Update</button> 
          </div>
    </div>
</div>`;
    }
  }

  document.getElementById("productsRow").innerHTML = temp;

}
function showMsg(index) {
  document.getElementById("card").style.display = "flex";
  var temp = `
 <div class="card-body">
 <h5 class="card-title">Delete Product</h5>
 <hr class="mb-4">
 <h6 class="card-subtitle mb-2 text-muted">Are you sure you want to delete these Records?</h6>
 <p class="card-text text-warning">This action cannot be undone</p>
 <hr class="mb-4">

 <input type="button" class="btn btn-primary ml-auto" data-dismiss="modal" value="Cancel"  onclick="closeDiv()">              
 <input type="submit" class="btn btn-danger mr-auto" value="Delete" onclick=deleteProduct(`+ index + `)>
</div>`
  document.getElementById("card").innerHTML = temp;

}
function deleteProduct(index) {

  var deleted = productsContainer.splice(index, 1);
  if (index == 0) {
    location.reload();
  }
  localStorage.setItem("data", JSON.stringify(productsContainer));
  displayData();
  document.getElementById("card").style.display = "none";
}


function showDiv(index) {
  var temp =
    `
 <button onclick="updateProduct(`+ index + `)" class="btn btn-warning float-right"> Update Product</button>`;


  document.getElementById("updateProductName").setAttribute("value", productsContainer[index].name);
  document.getElementById("updateProductPrice").setAttribute("value", productsContainer[index].price);
  document.getElementById("updateProductCategory").setAttribute("value", productsContainer[index].category);
  document.getElementById("updateProductCode").setAttribute("value", productsContainer[index].code);
  document.getElementById("updateProductDesc").innerHTML = productsContainer[index].desc;
  document.getElementById("updateBtn").innerHTML = temp;

  document.getElementById("update").style.display = "flex";


}

function closeDiv() {
  document.getElementById("update").style.display = "none";
  document.getElementById("card").style.display = "none";

}
function updateProduct(index) {

  var nameResult = ((document.getElementById("updateProductName").value).toLowerCase()).localeCompare((productsContainer[index].name).toLowerCase());
  if (nameResult != 0) {
    productsContainer[index].name = document.getElementById("updateProductName").value;

  }

  var price = document.getElementById("updateProductPrice").value;
  if (price != (productsContainer[index].price)) {
    productsContainer[index].price = document.getElementById("updateProductPrice").value;

  }

  var categoryResult = ((document.getElementById("updateProductCategory").value).toLowerCase()).localeCompare((productsContainer[index].category).toLowerCase());
  if (categoryResult != 0) {
    productsContainer[index].category = document.getElementById("updateProductCategory").value;

  }

  var codeResult = ((document.getElementById("updateProductCode").value).toLowerCase()).localeCompare((productsContainer[index].code).toLowerCase());
  if (codeResult != 0) {
    productsContainer[index].code = document.getElementById("updateProductCode").value;

  }

  var imgResult = document.getElementById("updateProductImage").value;

  var filename = imgResult.replace(/^.*[\\\/]/, '');
  productsContainer[index].image = filename;

  var descResult = ((document.getElementById("updateProductDesc").value).toLowerCase()).localeCompare((productsContainer[index].desc).toLowerCase());
  if (descResult != 0) {
    productsContainer[index].desc = document.getElementById("updateProductDesc").value;

  }

  localStorage.setItem("data", JSON.stringify(productsContainer));
  displayData();

  document.getElementById("update").style.display = "none";


}


function showList() {
  document.getElementById("con").style.display = "block";
  document.getElementById("add").style.display = "none";
  document.getElementById("closed").style.display = "inline";

}
function closeList() {
  document.getElementById("add").style.display = "block";
  document.getElementById("closed").style.display = "none";
  document.getElementById("con").style.display = "none";

}

function validateProduct(product) {
  productRegex = /^([A-Z]|[a-z]){3,20}$/;
  if (productRegex.test(product) == false) {
    document.getElementById("addBtn").disabled = "true";
  }
  else
    document.getElementById("addBtn").removeAttribute("disabled");

}