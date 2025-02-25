document.addEventListener("DOMContentLoaded", function() {
    particlesJS.load('particles-js', '/static/js/particles.json', function() {
        console.log("particles.js loaded successfully!");
    });
});

document.getElementById("portfolioButton").addEventListener("click", function() {
    alert("button clicked!");
});

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

window.onload = async function() {
    const mainContainers = document.getElementsByClassName('mainContainer')

    if (mainContainers.length > 0) {
        const mainContainer = mainContainers[0]
        mainContainer.classList.add("fade-in")
    }

}