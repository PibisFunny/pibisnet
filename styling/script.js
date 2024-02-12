// THIS PORTION RESETS THE GETBRIGHT EFFECT
function resetEffect() {
  const elements = document.querySelectorAll('*:not(script)');
  elements.forEach(element => {
    element.classList.remove('getBright');
  });
}

document.addEventListener('DOMContentLoaded', resetEffect);
window.addEventListener('pageshow', resetEffect);
// THIS PORTION RESETS THE GETBRIGHT EFFECT

const buttons = document.querySelectorAll('.effectButton');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    const elements = document.querySelectorAll('*:not(script)');
    const soundFiles = [
      'https://www.pibis.net/snd/clickBattle.mp3',
      'https://www.pibis.net/snd/clickBoss.mp3'
    ];
    const redirectURL = this.getAttribute('data-redirect');
    const randomSoundIndex = Math.floor(Math.random() * soundFiles.length);
    const audio = new Audio(soundFiles[randomSoundIndex]);

    elements.forEach(element => {
      element.classList.add('getBright');
    });

    audio.play();

    setTimeout(() => {
      window.location.href = redirectURL;
    }, 2500);
  });
});
