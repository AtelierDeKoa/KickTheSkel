// Variables
let counter = 0;
let leftTime = 60;
let despMenu = false;


// Borrar esqueletos
function deleteSkel() {
    // Subir numero del contador
    counter++;
    $("#counter").text(counter);
    // Ocultar el esqueleto
    $(this).find(".skel01").css("display", "none");
    // Que aparezca la bomba
    $(this).find(".lilBomb01").css("display", "block");
    // Que la animacion se pause y que se elimine el div del html
    $(this).css("animation-play-state", "paused").fadeOut(400, () => $(this).remove());
};

// Borrar calabazas
function deletePump() {
    // Subir numero del contador
    counter = counter + 5;
    $("#counter").text(counter);
    // Ocultar la calabaza
    $(this).find(".pump").css("display", "none");
    // Que aparezca la bomba
    $(this).find(".lilBomb02").css("display", "block");
    // Que la animacion se pause y que se elimine el div del html
    $(this).css("animation-play-state", "paused").fadeOut(600, () => $(this).remove());
};

// Crear nuevos esqueletos
function figL() {
    if (!despMenu && leftTime > 0) {
        const newfig = jQuery("<div>", {
            class: "figL anim"
        }).appendTo("body").click(deleteSkel);
        jQuery("<img>", {
            class: "skel01",
            alt: "Esqueleto",
            src: "img/SkelLgif.gif"
        }).appendTo(newfig);
        jQuery("<img>", {
            class: "lilBomb01",
            alt: "Esqueleto *c muere*",
            src: "img/lilBomb01.png"
        }).appendTo(newfig);
    }
    setTimeout(figL, 1000 * Math.random() + 2000);
};
setTimeout(figL, 1000);

function figR() {
    if (!despMenu && leftTime > 0) {
        const newfig = jQuery("<div>", {
            class: "figR anim"
        }).appendTo("body").click(deleteSkel);
        jQuery("<img>", {
            class: "skel01",
            alt: "Esqueleto",
            src: "img/SkelRgif.gif"
        }).appendTo(newfig);
        jQuery("<img>", {
            class: "lilBomb01",
            alt: "Esqueleto *c muere*",
            src: "img/lilBomb01.png"
        }).appendTo(newfig);
    }
    setTimeout(figR, 1000 * Math.random() + 2000);
};
setTimeout(figR, 1000);

// Crear calabazas
function pumpkinL() {
    if (!despMenu && leftTime > 0) {
        const newpump = jQuery("<div>", {
            class: "pumpL anim"
        }).appendTo("body").click(deletePump);
        jQuery("<img>", {
            class: "pump",
            alt: "Good Pumpkin",
            src: "img/goodPumpkingif.gif"
        }).appendTo(newpump);
        jQuery("<img>", {
            class: "lilBomb02",
            alt: "Calabaza *c muere*",
            src: "img/lilBomb01.png"
        }).appendTo(newpump);
    }
    setTimeout(pumpkinL, 5000 + (1000 * Math.random() + 8000));
}
setTimeout(pumpkinL, 2000);

function pumpkinR() {
    if (!despMenu && leftTime > 0) {
        const newpump = jQuery("<div>", {
            class: "pumpR anim"
        }).appendTo("body").click(deletePump);
        jQuery("<img>", {
            class: "pump",
            alt: "Evil Pumpkin",
            src: "img/evilPumpkingif.gif"
        }).appendTo(newpump);
        jQuery("<img>", {
            class: "lilBomb02",
            alt: "Calabaza *c muere*",
            src: "img/lilBomb01.png"
        }).appendTo(newpump);
    }
    setTimeout(pumpkinR, 1000 * Math.random() + 8000);
}
setTimeout(pumpkinR, 2000);

// Timer
const interval = setInterval(function() {
    if (!despMenu) {
        leftTime--;
    }
    $("#timer").text(leftTime);
    if (leftTime == 0) {
        clearInterval(interval);
        $("#timer").text("Time out!");
        $(".interfaz").remove();
        $("#counterDiv").css("animation-play-state", "running");
        $("#restart").fadeIn(3000).css("display", "block");
        jQuery("<img>", {
            class: "bigBomb",
            alt: "Bomba grande",
            src: "img/bigBombgif.gif"
        }).appendTo("body");
        $(".anim").remove();
        $("#music").attr("src", "music/SomethingWickedByRossBugden_Crop.mp3");
    }
}, 1000);

// Pause
function pauseMenu() {
    if (despMenu == false) {
        $("#pauseOpt").css("display", "flex");
        $(".anim").css("animation-play-state", "paused");
        despMenu = true;
    } else {
        $("#pauseOpt").css("display", "none");
        $(".anim").css("animation-play-state", "running");
        despMenu = false;
    }
};

$("#pauseBtn").click(pauseMenu);
$("#continue").click(pauseMenu);

// Abrir y cerrar el menu de pausa al pulsar Esc
function teclaPulsada(e) {
    if (e.code == "Escape") {
        pauseMenu();
    }
};

document.addEventListener("keyup", teclaPulsada);

// Movimiento varita
// function rPosition(wand00, mouseX, mouseY) {
//     var offset = $("#wand00").offset();
//     var x = mouseX - offset.left;
//     var y = mouseY - offset.top;
//     return { 'x': x, 'y': y };
// }
// $("body").click(rPosition);



// TODO: 
// Girar la varita

// BUG: doble click esqueleto
// Pantalla de inicio centrada
// Calabaza que se queda quieta

// FIXME: aumento velocidad a tope
// Cuando termine la animacion que se removee el esqueleto
// Arreglar la pantalla de inicio
// Parar gifs