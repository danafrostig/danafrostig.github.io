//var originalNumRolls= document.getElementById("originalNumRolls").value;
//var originalGlaze= document.getElementById("originalGlaze").value;
//var originalBoxes= document.getElementById("originalBoxes").value;

function updateOrderResult () {
    var originalNumRolls= document.getElementById("originalNumRolls").value;
    console.log(originalNumRolls)
    document.getElementById("og_info").textContent = "num rolls" + originalNumRolls;
};

function myFunction() {
    var x = document.getElementById("originalNumRolls").value;
    x += " roll(s)";
    //var y = document.getElementById("originalGlaze").value;
    //y += " glaze";
    var price = 2 * document.getElementById("originalNumRolls").value * document.getElementById("originalBoxes").value;
    document.getElementById("og_order").innerHTML = "You selected: " + x;
    document.getElementById("price").innerHTML = "Price: $ " + price;
};


function myFunction2() {
    var y = document.getElementById("originalGlaze").value;
    y += " glaze";
    document.getElementById("og_order2").innerHTML =  y;
};

function myFunction3() {
    var z = document.getElementById("originalBoxes").value;
    z += " boxes";
    var price = 2 * document.getElementById("originalNumRolls").value * document.getElementById("originalBoxes").value;
    document.getElementById("og_order3").innerHTML =  z;
    document.getElementById("price").innerHTML = "Price: $ " + price;
};

var cartNum = 0;
function myFunction4() {
    var a = document.getElementById("originalNumRolls").value;
    var b = document.getElementById("originalGlaze").value;
    var c = document.getElementById("originalBoxes").value;
    if (a != "" && b != "" && c != ""){
        cartNum ++;
        document.getElementById("cartNumber").innerHTML = "(" + cartNum + ")";
    }
    else {
        alert("Please complete the form.")
    }
    //cartNum ++;
    //document.getElementById("cartNumber").innerHTML = "(" + cartNum + ")";
};

function myFunction5() {
    cartNum ++;
    document.getElementById("cartNumber").innerHTML = "(" + cartNum + ")";
};


// function myPrice() {
//     var rollNum = document.getElementById("originalNumRolls").value;
//     var boxNum = document.getElementById("originalBoxes").value;
//     var price = 2 * rollNum * boxNum;
//     document.getElementById("price").innerHTML =  "Price: $" + price;
// };
