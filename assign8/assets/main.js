

//function for getting the chord that was selected
function getChordValue() {
    // var chordValue = document.getElementById("chosenChord").value;
    var chordValue = document.querySelector('input[name="chord"]:checked').value;
    console.log(chordValue);
    return chordValue;
};

// var mySound;
var cSound;
var aSound;
var gSound;
var eSound;
var dSound;
var fSound;
var amSound;
var dmSound;
var emSound;

function preload() {
    soundFormats('mp3', 'ogg');
    // mySound = loadSound('assets/guitar_chords_all.mp3');
    cSound = loadSound('assets/cChordSound.mp3');
    aSound = loadSound('assets/aChordSound.mp3');
    gSound = loadSound('assets/gChordSound.mp3');
    eSound = loadSound('assets/eChordSound.mp3');
    dSound = loadSound('assets/dChordSound.mp3');
    fSound = loadSound('assets/fChordSound.mp3');
    amSound = loadSound('assets/amChordSound.mp3');
    dmSound = loadSound('assets/dmChordSound.mp3');
    emSound = loadSound('assets/emChordSound.mp3');
    // console.log(isLoaded());
};

function setup() {
    // mySound.setVolume(0.5);
    // mySound.play();

    cSound.setVolume(0.8);
    // cSound.play();

    aSound.setVolume(0.8);
    // aSound.play();

    gSound.setVolume(0.8);

    eSound.setVolume(0.8);

    dSound.setVolume(0.8);

    fSound.setVolume(0.8);

    amSound.setVolume(0.8);

    dmSound.setVolume(0.8);

    emSound.setVolume(0.8);
}


function displayChord() {
    var x = getChordValue();
    if (x == "cchord") {
        document.getElementById("frets").src = "./assets/imgs/cchord.png";
        cSound.play();
    }
    else if (x =="achord"){
        document.getElementById("frets").src = "./assets/imgs/achord.png";
        aSound.play();
    }
    else if (x =="gchord"){
        document.getElementById("frets").src = "./assets/imgs/gchord.png";
        gSound.play();
    }
    else if (x =="echord"){
        document.getElementById("frets").src = "./assets/imgs/echord.png";
        eSound.play();
    }
    else if (x =="dchord"){
        document.getElementById("frets").src = "./assets/imgs/dchord.png";
        dSound.play();
    }
    else if (x =="fchord"){
        document.getElementById("frets").src = "./assets/imgs/fchord.png";
        fSound.play();
    }
    else if (x =="amchord"){
        document.getElementById("frets").src = "./assets/imgs/amchord.png";
        amSound.play();
    }
    else if (x =="dmchord"){
        document.getElementById("frets").src = "./assets/imgs/dmchord.png";
        dmSound.play();
    }
    else if (x =="emchord"){
        document.getElementById("frets").src = "./assets/imgs/emchord.png";
        emSound.play();
    };



};


