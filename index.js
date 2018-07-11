document.querySelectorAll(".drum-pad").forEach(drumPad => {
  drumPad.addEventListener("click", function(e) {
    e.target.querySelector("audio").play();
  });
});