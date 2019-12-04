

// var mySound;
var lowEString;
var aString;
var dString;
var gString;
var bString;
var eString;


function preload() {
    soundFormats('mp3', 'ogg');
    // mySound = loadSound('assets/guitar_chords_all.mp3');
    lowEString = loadSound('assets/lowEString.mp3');
    aString = loadSound('assets/aString.mp3');
    dString = loadSound('assets/dString.mp3');
    gString = loadSound('assets/gString.mp3');
    bString = loadSound('assets/bString.mp3');
    eString = loadSound('assets/eString.mp3');
    // console.log(isLoaded());
}

function setup() {
    // mySound.setVolume(0.5);
    // mySound.play();

    lowEString.setVolume(0.5);
    // cSound.play();

    aString.setVolume(0.5);
    // aSound.play();

    dString.setVolume(0.5);

    gString.setVolume(0.5);

    bString.setVolume(0.5);

    eString.setVolume(0.5);
}


function playLowE() {
        lowEString.play();
};

function playA() {
        aString.play();
};

function playD() {
        dString.play();
};

function playG() {
        gString.play();
};

function playB() {
        bString.play();
};

function playE() {
        eString.play();
};

// function updateGlazeValue() {
//     var y = getGlazeValue();
//     var yString = "";
//     if (y == "no") {
//         document.getElementById("originalimg").style.filter = "grayscale(100%)";
//     }
//     else if (y == "sugar-milk") {
//         document.getElementById("originalimg").style.filter = "contrast(1.75)";
//     }
//     else if (y == "vanilla-milk") {
//         document.getElementById("originalimg").style.filter = "opacity(60%)";
//     }
//     else if (y == "double-chocolate") {
//         document.getElementById("originalimg").style.filter = "sepia(80%)";
//     }
//     else {
//         document.getElementById("originalimg").style.filter = "sepia(0)";
//     }


//     yString += y + " glaze";
//     document.getElementById("glazeValueDisplay").innerHTML =  yString;

// };