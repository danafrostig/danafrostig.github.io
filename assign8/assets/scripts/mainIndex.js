

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
    lowEString = loadSound('assets/sounds/lowEString.mp3');
    aString = loadSound('assets/sounds/aString.mp3');
    dString = loadSound('assets/sounds/dString.mp3');
    gString = loadSound('assets/sounds/gString.mp3');
    bString = loadSound('assets/sounds/bString.mp3');
    eString = loadSound('assets/sounds/eString.mp3');
    // console.log(isLoaded());
};

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
};


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

