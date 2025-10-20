//your JS code here. If required.
  const buttons = document.querySelectorAll(".btn");
const stopButton = document.querySelector(".stop");
let currentAudio = null;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const soundName = button.dataset.sound;
    
    if(currentAudio) {
      currentAudio.pause();
      currentAudio.remove();
    }
    
    currentAudio = document.createElement('audio');
    currentAudio.src = `sounds/${soundName}.mp3`;
    
    document.body.appendChild(currentAudio);
    
    currentAudio.play();
  });
});

stopButton.addEventListener('click', () => {
  if(currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
});