$(document).ready(function() {
    // Hide button click event
    $("#hideBtn").click(function() {
        $("#box").hide();
    });

    // Show button click event
    $("#showBtn").click(function() {
        $("#box").show();
    });

    // Fade in button click event
    $("#fadeInBtn").click(function() {
        let fadeTime = + prompt("Enter fade in time in Second");
        
        $("#box").fadeIn(fadeTime*1000);
    });

    // Fade out button click event
    $("#fadeOutBtn").click(function() {
        let fadeTime = +prompt("Enter fade out time in Second");
        $("#box").fadeOut(fadeTime*1000);
    });
});