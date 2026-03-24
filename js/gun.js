  const overlay = document.getElementById('hloverlay');

  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  let audioBuffer = null;

  fetch('../media/gunpickup2.wav')
    .then(response => response.arrayBuffer())
    .then(data => audioContext.decodeAudioData(data))
    .then(buffer => {
      audioBuffer = buffer;
    });

  function playSound() {
    if (!audioBuffer) return;

    const buffSauce = audioContext.createBufferSource();
    buffSauce.buffer = audioBuffer;
    buffSauce.connect(audioContext.destination);
    buffSauce.start(0);
  }

  document.addEventListener('keydown', function(event) {
    if (event.key === '8') {

      if (audioContext.state === 'suspended') {
        audioContext.resume();
      }

      overlay.style.display = 'block';
      playSound();

      setTimeout(() => {
        overlay.style.display = 'none';
      }, 1400);
    }
  });