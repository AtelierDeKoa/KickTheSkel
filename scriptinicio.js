let playExp=document.getElementById("playExp");
let howToPlay=document.getElementById("howToPlay");
let X=document.getElementById("closeHtP");
let howPlay=false;

// How to play
function abrirHowPlay() {
    if (howPlay==false){
       playExp.style.display="flex";
        howPlay=true;
    } else{
        playExp.style.display="none";
        howPlay=false;
    }
};

howToPlay.addEventListener("click",abrirHowPlay);
X.addEventListener("click",abrirHowPlay);

// Abrir y cerrar How to Play al pulsar Esc
function teclaPulsada(e) {
    if (e.code == "Escape") {
        pauseMenu();
    }
};

document.addEventListener("keyup", abrirHowPlay);