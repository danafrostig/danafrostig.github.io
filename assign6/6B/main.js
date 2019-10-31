//javascript file for the Bun Bun Bake Shop website

//function for getting the number of rolls selected
function getRollsValue() {
    var rollsValue = document.getElementById("originalNumRolls").value;
    return rollsValue;
};

//function for getting the glaze selected
function getGlazeValue() {
    var glazeValue = document.getElementById("originalGlaze").value;
    return glazeValue;
};

//function for getting the number of boxes selected
function getBoxesValue() {
    var boxesValue = document.getElementById("originalBoxes").value;
    return boxesValue;
};

//function for getting the flavor selected
function getFlavorValue(){
    var flavorValue = document.getElementById("flavor").innerHTML;
    //console.log(flavorValue);
    return flavorValue;
};

//function for getting the price of the order
function getPriceValue(){
    var priceValue = getRollsValue() * getBoxesValue() * 2;
    //console.log(flavorValue);
    return priceValue;
};

//function for getting the value for number of rolls the user selects (also updates the price of the order)
function updateNumRollsValue() {
    var x = getRollsValue()
    var xString = "";
    if (x == 1) {
        xString += x + " roll";
    }
    else {
        xString += x + " rolls";
        //x += " rolls"
    }

    var price = 2 * document.getElementById("originalNumRolls").value * document.getElementById("originalBoxes").value;
    document.getElementById("numRollsDisplay").innerHTML = xString;
    document.getElementById("price").innerHTML = "Price: $ " + price;
};

//function for getting the type of glaze the user selects and changing the filter on the image of the roll
function updateGlazeValue() {
    var y = getGlazeValue();
    var yString = "";
    if (y == "no") {
        document.getElementById("originalimg").style.filter = "grayscale(100%)";
    }
    else if (y == "sugar-milk") {
        document.getElementById("originalimg").style.filter = "contrast(1.75)";
    }
    else if (y == "vanilla-milk") {
        document.getElementById("originalimg").style.filter = "opacity(60%)";
    }
    else if (y == "double-chocolate") {
        document.getElementById("originalimg").style.filter = "sepia(80%)";
    }
    else {
        document.getElementById("originalimg").style.filter = "sepia(0)";
    }


    yString += y + " glaze";
    document.getElementById("glazeValueDisplay").innerHTML =  yString;

};

//function for getting the value for number of boxes the user selects (also updates the price of the order)
function updateBoxesValue() {
    var z = getBoxesValue();
    var zString = "";
    if (z == 1) {
        zString += z + " box";
    }
    else {
        zString += z + " boxes";
    }
    var price = 2 * document.getElementById("originalNumRolls").value * document.getElementById("originalBoxes").value;
    document.getElementById("numBoxesDisplay").innerHTML =  zString;
    document.getElementById("price").innerHTML = "Price: $ " + price;
};

// //function for updating the cart icon to contain the number of orders added to cart.
// //the function also checks to make sure the form is complete before incrementing the cart icon by 1
// var cartNum = 0;
// function cartAlertUpdate() {
//     var a = getRollsValue();
//     var b = getGlazeValue();
//     var c = getBoxesValue();
//     if (a != "" && b != "" && c != ""){
//         cartNum ++;
//         document.getElementById("cartNumber").innerHTML = "(" + cartNum + ")";
//     }
//     else {
//         alert("Please complete the form.");
//     }
// };


//function for updating the cart icon to conatain the number of orders added to cart when using the quick add button
function quickAddCartUpdate() {
    cartNum ++;
    document.getElementById("cartNumber").innerHTML = "(" + cartNum + ")";
};


//function for updating the cart icon to contain the number of orders added to cart.
//the function also checks to make sure the form is complete before incrementing the cart icon by 1
var cartNum = 0;
function cartAlertUpdate() {
    var a = getRollsValue();
    var b = getGlazeValue();
    var c = getBoxesValue();
    if (a != "" && b != "" && c != ""){
        cartNum ++;
        //document.getElementById("cartNumber").innerHTML = "(" + cartNum + ")";
        appendOrderToStorageList();
    }
    else {
        alert("Please complete the form.");
    }
};

//function for the add to cart button
function addToCart() {
    cartAlertUpdate();
    cartNumberUpdate();
};

//function for updating the cart number on all webpages
function cartNumberUpdate() {
    var orders = JSON.parse(localStorage.getItem("orderList"));
    if (orders.length >0){
            document.getElementById("cartNumber").innerHTML= "(" + orders.length + ")";
    };
};

//function for creating the order object
function createOrder() {
    var order = {
        flavor: getFlavorValue(),
        numRolls: getRollsValue(),
        glaze: getGlazeValue(),
        numBoxes: getBoxesValue(),
        price: getPriceValue()
    };
    return order;
};

//function for adding each order to local storage
function appendOrderToStorageList(){

    if (!localStorage.getItem("orderList")){
        var orders = [];
        localStorage.setItem("orderList", JSON.stringify(orders));
    }


    var orders = JSON.parse(localStorage.getItem("orderList"));
    orders.push(createOrder());
    console.log(orders)
    localStorage.setItem("orderList", JSON.stringify(orders));

};

//function for creating styling for displaying orders to the cart page
function makeDivForOrder(order, i){
    var cartDiv = document.createElement('div');
    cartDiv.innerHTML = '<img src="./imgs/reg_roll.png" alt="original roll" class = "cartimg" >'
                            + '<br><p class = "infoTitle">original cinnamon roll</p>'
                            + '<p class = "info">rolls: <b><span class="rlls">12</b> <br>'
                               + 'glaze: <b><span class="glz">vanilla-milk</span></b><br>'
                               + 'boxes: <b><span class="bxs">2</span></b> <br>'
                               + 'price: <b>$<span class="prc">48</span></b></p>'
                           + '<p class = "remove"><button onclick="removeOrderFromCart(' + i + ')">remove</button></p> <br><br>';

    var flavorTitle = cartDiv.querySelector('.infoTitle');
    flavorTitle.innerHTML = order.flavor;

    if (order.flavor=="Blackberry Cinnamon Roll"){
        var cartImg = cartDiv.querySelector('.cartimg');
        cartImg.src = "./imgs/blackberry_roll.png"
    };

    var rollsSpan = cartDiv.querySelector('.rlls');
    rollsSpan.innerHTML = order.numRolls;
    var glazeSpan = cartDiv.querySelector('.glz');
    glazeSpan.innerHTML = order.glaze;
    var boxesSpan = cartDiv.querySelector('.bxs');
    boxesSpan.innerHTML = order.numBoxes;
    var priceSpan = cartDiv.querySelector('.prc');
    priceSpan.innerHTML = order.price;

    return cartDiv;

};

//function for displaying all orders on the cart page
function displayAllOrders(){
console.log("hello");

    document.getElementById("cartFromStorage").innerHTML="";
    var orders = JSON.parse(localStorage.getItem("orderList"));

    document.getElementById("cartNumber").innerHTML= "(" + orders.length + ")";


    for (i in orders){
        var orderDiv = makeDivForOrder(orders[i], i);
        document.getElementById("cartFromStorage").appendChild(orderDiv);
    };

};

//function for allowing users to remove orders from their cart
function removeOrderFromCart(i) {
    console.log(i);

    var orders = JSON.parse(localStorage.getItem("orderList"));
    orders.splice(i, 1);
    localStorage.setItem("orderList", JSON.stringify(orders));

    displayAllOrders();
};








