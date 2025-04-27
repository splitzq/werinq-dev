// document.getElementById("portfolioButton").addEventListener("click", function() {
//    alert("button clicked!");
//});

//window.onload = async function() {
//    const mainContainers = document.getElementsByClassName('mainContainer')
//
  //  if (mainContainers.length > 0) {
    //    const mainContainer = mainContainers[0]
      //  mainContainer.classList.add("fade-in")
    //}
//}

document.addEventListener("DOMContentLoaded", () => {
  const audio = new Audio("/static/music/themeSong.mp3")
  const playMusic = document.getElementById('playMusic')

  audio.volume = 0.010

  playMusic.addEventListener("click", () => {
    audio.play()
  })
})