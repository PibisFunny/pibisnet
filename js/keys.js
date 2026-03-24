document.addEventListener('DOMContentLoaded', () => {

  const audioContext = new (window.AudioContext || window.webkitAudioContext)();

  // maps sounds
  const soundMap = {
    aariogenerator: "../media/xylo1.wav",
    hotdog: "../media/xylo2.wav",
    fun: "../media/xylo3.wav",
    buttons: "../media/xylo4.wav",
    characters: "../media/xylo5.wav",
    commissions: "../media/xylo6.wav"
  };

  const buffers = {};

  async function loadSounds() {
    for (const key in soundMap) {
      try {
        const response = await fetch(soundMap[key]);

        if (!response.ok) {
          console.error("Failed to load:", key, soundMap[key]);
          continue;
        }

        const arrayBuffer = await response.arrayBuffer();
        buffers[key] = await audioContext.decodeAudioData(arrayBuffer);

      } catch (err) {
        console.error("Error loading:", key, err);
      }
    }
  }

  // play sound
  function playSound(key) {
    const buffer = buffers[key];
    if (!buffer) {
      console.warn("Sound wasn't loaded for:", key);
      return;
    }

    const source = audioContext.createBufferSource();
    source.buffer = buffer;
    source.connect(audioContext.destination);
    source.start(0);
  }


  // unlock sounds when clocked
  document.addEventListener('click', async () => {
    if (audioContext.state === 'suspended') {

      await audioContext.resume();

    }

    loadSounds();
  }, { once: true });

  document.querySelectorAll('.iconext').forEach(el => {
    el.addEventListener('mouseenter', () => {
      const key = el.dataset.sound;
      playSound(key);

    });
  });

});