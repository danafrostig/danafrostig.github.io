

//function for getting the chord that was selected
function getChordValue() {
    // var chordValue = document.getElementById("chosenChord").value;
    var chordValue = document.querySelector('input[name="chord"]:checked').value;
    console.log(chordValue);
    return chordValue;
};

var mySound;
function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('guitar_chords_all.mp3');
  console.log(isLoaded());
}

function setup() {
  preload()

  mySound.setVolume(0.1);
  mySound.play();
}


function displayChord() {
    var x = getChordValue();
    if (x == "cchord") {
        document.getElementById("frets").src = "./assets/imgs/cchord.png";
        setup();
    }
    else if (x =="achord"){
        document.getElementById("frets").src = "./assets/imgs/achord.png";
    }
    else if (x =="gchord"){
        document.getElementById("frets").src = "./assets/imgs/gchord.png";
    }
    else if (x =="echord"){
        document.getElementById("frets").src = "./assets/imgs/echord.png";
    }
    else if (x =="dchord"){
        document.getElementById("frets").src = "./assets/imgs/dchord.png";
    }
    else if (x =="fchord"){
        document.getElementById("frets").src = "./assets/imgs/fchord.png";
    }
    else if (x =="amchord"){
        document.getElementById("frets").src = "./assets/imgs/amchord.png";
    }
    else if (x =="dmchord"){
        document.getElementById("frets").src = "./assets/imgs/dmchord.png";
    }
    else if (x =="emchord"){
        document.getElementById("frets").src = "./assets/imgs/emchord.png";
    };



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