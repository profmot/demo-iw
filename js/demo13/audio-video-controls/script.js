'use strict';
let audio = document.getElementsByTagName('audio')[1];
let sources = document.querySelectorAll('source');

window.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.tagName === 'img') {
    sources.forEach(function (element) {
      console.log(element.getAttribute('type'));
      if (element.getAttribute('type').includes('mp3')) {
        console.log(element.getAttribute('type'));
        element.src = `./audio/${e.target.getAttribute('id')}.mp3`;
      } else {
        element.src = `./audio/${e.target.getAttribute('id')}.wav`;
      }
    });
    console.log(audio);
    if (audio.paused) {
      audio.load();
      audio.play();
    } else audio.pause();
  }
});
