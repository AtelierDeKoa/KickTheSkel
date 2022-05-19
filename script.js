// Variables
let counter = 0;
let leftTime = 60;
let despMenu=false;

// Click en esqueleto
$("#mov").click(function() {
    $("#counter").text(counter);
    $(this).find("#skel01").css("display", "none");
    counter++;
    $(this).find("#lilBomb01").css("display", "block");
    $(this).css("animation-play-state", "paused").fadeOut(400, () => $(this).remove());
});

// Timer
const interval = setInterval(function() {
    leftTime--;
    $("#timer").text(leftTime);
    if (leftTime == 0) {
        clearInterval(interval);
        $("#timer").text("Time out!");
    }
}, 1000);

// TODO: Buscar setTimeout() para cuenta atrás y el setInterval para hacer reaparecer los esqueletos

// Pause
function pauseMenu() {
    if(despMenu==false){
        $("#pauseOpt").css("display", "flex");
        despMenu=true;
    }else{
        $("#pauseOpt").css("display", "none");
        despMenu=false;
    }
};

$("#pauseBtn").click(pauseMenu);

function teclaPulsada(e){
    if(e.code==Escape){
        pauseMenu;
    }
};

document.addEventListener("keyup", teclaPulsada);

// Me falta poner el condicional de el pause abierto



