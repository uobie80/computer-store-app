// The below code is for adding and removing items from the shopping cart

// Get the button elements
var shippingRow1El1 = document.querySelector('#shipping');
var subtotalRow1El1 = document.querySelector('#subtotal');
var totalRow1El1 = document.querySelector('#total');
const clearCartBtnEl1 = document.querySelector('#clear-shopping-cart');
const tableBody = document.querySelector('#shopping-cart-items');
const addItemButton = document.querySelector('.btn-success');
const deleteButtons = document.querySelectorAll('.delete-btn');
const img_url = document.querySelector(".product-details-img").getAttribute('src');
const make = document.querySelector('#make').textContent;
const model = document.querySelector('#model').textContent;
var discount_price = document.querySelector('#discount-price');
var original_price = document.querySelector('#original-price');

check_if_last_item = function() {
    const row = (document.querySelector('#cart-items')) ? true : false;
    
    console.log(row);

    if (!row) {

        clear_shopping_cart();

    } else {

        var element = document.querySelector('#total-price');
        var subtotalEl1 = document.querySelector('#sub-total-id-01');
        var totalEl1 = document.querySelector("#total-id-01");
        let price = parseInt(element.textContent.replace(/[^0-9.-]+/g,""));
        let subtotal = subtotalEl1.textContent;
            subtotal = parseInt(subtotal.replace(/[^0-9.-]+/g,""));
            subtotal = subtotal - price;
            subtotalEl1.textContent = "$" + subtotal.toLocaleString();
        
         let total = totalEl1.textContent;
             total = parseInt(total.replace(/[^0-9.-]+/g,""));
             total = total - price;
             totalEl1.textContent = "$" + total.toLocaleString();
    
    }

};


calculate_total = function () {


     const shipping_price = 5;
     var elements = document.querySelectorAll('#total-price');
     var price = 0;
     elements.forEach((element)=>{
       price += parseInt(element.textContent.replace(/[^0-9.-]+/g,""))
     } );

     console.log(price);
  
     var total_price = price + shipping_price;



    shippingRow1El1.remove();
    subtotalRow1El1.remove();
    totalRow1El1.remove();


  subtotalRow1El1 = document.createElement('tr');
  shippingRow1El1 = document.createElement('tr');
  totalRow1El1 = document.createElement('tr');


  const subtotalCol1El1 = document.createElement('td');
  const subtotalCol2El2 = document.createElement('td');
  const subtotalCol3El3 = document.createElement('td');
  const subtotalH5El1 = document.createElement('h5');
  const subtotalH5El2 = document.createElement('h5');
  const subtotalStrongEl1 = document.createElement('strong');


  const shippingCol1El1 = document.createElement('td');
  const shippingCol2El2 = document.createElement('td');
  const shippingCol3El3 = document.createElement('td');
  const shippingH5El1 = document.createElement('h5');
  const shippingH5El2 = document.createElement('h5');
  const shippingStrongEl1 = document.createElement('strong');

  const totalCol1El1 = document.createElement('td');
  const totalCol2El2 = document.createElement('td');
  const totalCol3El3 = document.createElement('td');
  const totalH3El1 = document.createElement('h3');
  const totalH3El2 = document.createElement('h3');
  const totalStrongEl1 = document.createElement('strong');


  subtotalRow1El1.setAttribute("id","subtotal");
  shippingRow1El1.setAttribute("id","shipping");
  totalRow1El1.setAttribute("id", "total");

  subtotalCol1El1.setAttribute("class", "text-right");
  subtotalCol1El1.setAttribute("colspan", "3");
  subtotalH5El1.textContent = "Subtotal";
  subtotalStrongEl1.setAttribute("id", "sub-total-id-01")
  subtotalStrongEl1.textContent =  "$" + price.toLocaleString(); 
  subtotalCol2El2.setAttribute("class","text-center");


  shippingCol1El1.setAttribute("class", "text-right");
  shippingCol1El1.setAttribute("colspan", "3");
  shippingH5El1.textContent = "Shipping";
  shippingStrongEl1.textContent = "$" + shipping_price + ".00";
  shippingCol2El2.setAttribute("class","text-center");


  totalCol1El1.setAttribute("class", "text-right");
  totalCol1El1.setAttribute("colspan", "3");
  totalH3El1.textContent = "Total";
  totalStrongEl1.setAttribute("id","total-id-01");
  totalStrongEl1.textContent = "$" + total_price.toLocaleString() + ".00";
  totalCol2El2.setAttribute("class","text-center");

  subtotalCol1El1.appendChild(subtotalH5El1);
  subtotalH5El2.appendChild(subtotalStrongEl1);
  subtotalCol2El2.appendChild(subtotalH5El2);

  shippingCol1El1.appendChild(shippingH5El1);
  shippingH5El2.appendChild(shippingStrongEl1);
  shippingCol2El2.appendChild(shippingH5El2);

  totalCol1El1.appendChild(totalH3El1);
  totalH3El2.appendChild(totalStrongEl1);
  totalCol2El2.appendChild(totalH3El2);

  subtotalRow1El1.appendChild(subtotalCol1El1);
  subtotalRow1El1.appendChild(subtotalCol2El2);
  subtotalRow1El1.appendChild(subtotalCol3El3);

  shippingRow1El1.appendChild(shippingCol1El1);
  shippingRow1El1.appendChild(shippingCol2El2);
  shippingRow1El1.appendChild(shippingCol3El3);

  totalRow1El1.appendChild(totalCol1El1);
  totalRow1El1.appendChild(totalCol2El2);
  totalRow1El1.appendChild(totalCol3El3);

  tableBody.appendChild(subtotalRow1El1);
  tableBody.appendChild(shippingRow1El1);
  tableBody.appendChild(totalRow1El1);


};


//Remove item from shopping cart
remove_item = function (event) {

    event.preventDefault();

    const item = event.target.parentNode.parentNode;
 
    item.remove();

    check_if_last_item();

};


//Add row to shopping cart
add_to_shoppingcart = function (event) {
 
    event.preventDefault();

 
     const productName = make + " " + model;

   
  
    // Create row to add new item
    const row = document.createElement('tr');
    row.setAttribute("id","cart-items");

    // define columns for new item
    
    const quantityEl1 = document.createElement('td');
    const nameEl1 = document.createElement('td');
    const priceEl1 = document.createElement('td');
    const totalEl1 = document.createElement('td');
    const deleteEl1 = document.createElement('td');

    quantityEl1.setAttribute("class", "col-sm-1 col-md-1");
    quantityEl1.setAttribute("style", "text-align: center");
    nameEl1.setAttribute("class","col-sm-8 col-md-6");
    priceEl1.setAttribute("class","col-sm-1 col-md-1");
    totalEl1.setAttribute("class","col-sm-1 col-md-1");
    priceEl1.setAttribute("id","product-price");
    totalEl1.setAttribute("id","total-price");
    deleteEl1.setAttribute("class","col-sm-1 col-md-1");

    // Set the text content of each column

     if (discount_price) {
         
        priceEl1.textContent = discount_price.textContent;
        totalEl1.textContent = discount_price.textContent;
     }
     
     if (original_price) {
        priceEl1.textContent =  original_price.textContent;
        totalEl1.textContent =  original_price.textContent;
     }


    console.log(priceEl1.textContent);

    const mediaDivEl1 = document.createElement('div');
    const imgEl1 = document.createElement('img');
    const mediaBodyDivEl1 = document.createElement('div');
    const h5El1 = document.createElement('h5');
    const spanStatusEl1 = document.createElement('span');
    const spanStatusEl2 = document.createElement('span');
    const strongEl1 = document.createElement('strong');
    const numberInputEl1 = document.createElement('input');
    const deleteBtnEl1 = document.createElement('input');

     mediaDivEl1.setAttribute('class', 'media');
     imgEl1.setAttribute("class","mr-3 thumbnail img-fluid");
     imgEl1.setAttribute("src", img_url);
     imgEl1.setAttribute("alt", productName);
     imgEl1.setAttribute("width", "75");

     mediaBodyDivEl1.setAttribute("class", "media-body");
     h5El1.setAttribute("class", "mt-0 media-heading text-primary");
     h5El1.textContent = productName;

     spanStatusEl1.textContent = "Status: ";
     spanStatusEl2.setAttribute("class", "text-success");
     strongEl1.textContent = "In Stock";

     numberInputEl1.setAttribute("class", "form-control");
     numberInputEl1.setAttribute("id", "number-input");
     numberInputEl1.setAttribute("type", "text");
     numberInputEl1.setAttribute("value", "1");
     numberInputEl1.setAttribute("readonly","");


     deleteBtnEl1.setAttribute("class","btn btn-danger delete-btn");
     deleteBtnEl1.setAttribute("type","button");
     deleteBtnEl1.setAttribute("value","X");
     deleteBtnEl1.addEventListener('click', remove_item);

     spanStatusEl2.appendChild(strongEl1);
     mediaBodyDivEl1.appendChild(h5El1);
     mediaBodyDivEl1.appendChild(spanStatusEl1);
     mediaBodyDivEl1.appendChild(spanStatusEl2);
     mediaDivEl1.appendChild(imgEl1);
     mediaDivEl1.appendChild(mediaBodyDivEl1);
     nameEl1.appendChild(mediaDivEl1);

     quantityEl1.appendChild(numberInputEl1);
   
     deleteEl1.appendChild(deleteBtnEl1);

    // Append the columns for the new item
    row.appendChild(nameEl1);
    row.appendChild(quantityEl1);
    row.appendChild(priceEl1);
    row.appendChild(totalEl1);
    row.appendChild(deleteEl1);

    

    // Add the new item to shopping cart
    tableBody.appendChild(row);

    calculate_total();

};


clear_shopping_cart = function() {
 
    const elements = tableBody.querySelectorAll("*");

    elements.forEach((element) => {
      element.remove();
    });
};

// Loop through each delete button and add an event listener to it
deleteButtons.forEach(deleteButton => {
    deleteButton.addEventListener('click', remove_item);
  });

// Attach an event listener to the "Add to Cart" button
addItemButton.addEventListener('click', add_to_shoppingcart);


clearCartBtnEl1.addEventListener('click', clear_shopping_cart);


