let counter = 0;
let leftTime = 60;

// Click en esqueleto
$("#mov").click(function() {
    counter++;
    $("#counter").text(counter);
    $(this).find("#skel01").css("display", "none");
    $(this).find("#lilBomb01").css("display", "block");
    $(this).css("animation-play-state", "paused").fadeOut(400, () => $(this).remove());
})

// Timer
const interval = setInterval(function() {
    leftTime--;
    $("#timer").text(leftTime);
    if (leftTime == 0) {
        clearInterval(interval);
        $("#timer").text("Time out!");
    }
}, 1000);

// Pause
$("#pauseBtn").click(function() {
    $("#pauseOpt").css("display", "flex");
})