document.querySelectorAll(".drum-pad").forEach(drumPad => {
  drumPad.addEventListener("click", function(e) {
    e.target.closest(".drum-pad").querySelector("audio").play();
  });
});

const drumKeys = ['q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c'];

document.addEventListener("keydown", function(e) {
  if(drumKeys.includes(e.key)) {
    const clip = document.querySelector("#" + e.key.toUpperCase());
    clip.pause();
    clip.currentTime = 0;
    clip.play();
  }
});