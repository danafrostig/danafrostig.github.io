

//initialize sound variables
var lowEString;
var aString;
var dString;
var gString;
var bString;
var eString;

//function for preloading sounds (mp3s) to reduce load time lag
function preload() {
    soundFormats('mp3', 'ogg');
    lowEString = loadSound('../assets/sounds/lowEString.mp3');
    aString = loadSound('../assets/sounds/aString.mp3');
    dString = loadSound('../assets/sounds/dString.mp3');
    gString = loadSound('../assets/sounds/gString.mp3');
    bString = loadSound('../assets/sounds/bString.mp3');
    eString = loadSound('../assets/sounds/eString.mp3');
    // console.log(isLoaded());
};

//function for setting volume for sounds
function setup() {

    lowEString.setVolume(0.5);

    aString.setVolume(0.5);

    dString.setVolume(0.5);

    gString.setVolume(0.5);

    bString.setVolume(0.5);

    eString.setVolume(0.5);
};

//function for playing the sounds for each string when strummed
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

