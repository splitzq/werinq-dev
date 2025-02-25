document.addEventListener("DOMContentLoaded", function() {
    particlesJS.load('particles-js', '/static/js/particles.json', function() {
        console.log("particles.js loaded successfully!");
    });
});

document.getElementById("portfolioButton").addEventListener("click", function() {
    alert("button clicked!");
});