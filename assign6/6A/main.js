//javascript file for the Bun Bun Bake Shop website

//function for getting the value for number of rolls the user selects (also updates the price of the order)
function numRollsValue() {
    var x = document.getElementById("originalNumRolls").value;
    if (x == 1) {
        x += " roll";
    }
    else {
        x += " rolls"
    }
    var price = 2 * document.getElementById("originalNumRolls").value * document.getElementById("originalBoxes").value;
    document.getElementById("numRollsDisplay").innerHTML = x;
    document.getElementById("price").innerHTML = "Price: $ " + price;
};

//function for getting the type of glaze the user selects and changing the filter on the image of the roll
function glazeValue() {
    var y = document.getElementById("originalGlaze").value;
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

    y += " glaze";
    document.getElementById("glazeValueDisplay").innerHTML =  y;

};

//function for getting the value for number of boxes the user selects (also updates the price of the order)
function boxesValue() {
    var z = document.getElementById("originalBoxes").value;
    if (z == 1) {
        z += " box";
    }
    else {
        z += " boxes"
    }
    var price = 2 * document.getElementById("originalNumRolls").value * document.getElementById("originalBoxes").value;
    document.getElementById("numBoxesDisplay").innerHTML =  z;
    document.getElementById("price").innerHTML = "Price: $ " + price;
};

//function for updating the cart icon to contain the number of orders added to cart.
//the function also checks to make sure the form is complete before incrementing the cart icon by 1
var cartNum = 0;
function cartAlertUpdate() {
    var a = document.getElementById("originalNumRolls").value;
    var b = document.getElementById("originalGlaze").value;
    var c = document.getElementById("originalBoxes").value;
    if (a != "" && b != "" && c != ""){
        cartNum ++;
        document.getElementById("cartNumber").innerHTML = "(" + cartNum + ")";
    }
    else {
        alert("Please complete the form.");
    }
};

//function for updating the cart icon to conatain the number of orders added to cart when using the quick add button
function quickAddCartUpdate() {
    cartNum ++;
    document.getElementById("cartNumber").innerHTML = "(" + cartNum + ")";
};

