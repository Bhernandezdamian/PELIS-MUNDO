const video = document.getElementById('video');
const playPauseButton = document.getElementById('play-pause');
const stopButton = document.getElementById('stop');
const forwardButton = document.getElementById('forward');

playPauseButton.addEventListener('click', () => {
  if (video.paused || video.ended) {
    video.play();
    playPauseButton.innerHTML = '⏸️';
  } else {
    video.pause();
    playPauseButton.innerHTML = '▶️';
  }
});

stopButton.addEventListener('click', () => {
  video.currentTime = 0;
  video.pause();
  playPauseButton.innerHTML = '▶️';
});

forwardButton.addEventListener('click', () => {
  video.currentTime += 10;
});
