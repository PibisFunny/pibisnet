var x = 0;
var lastTimestamp;

function updateTextSize(timestamp) {
  if (lastTimestamp) {
    var deltaTime = timestamp - lastTimestamp;
    var speedFactor = deltaTime / (1000/60);
    x += 0.1 * speedFactor;
  }
  lastTimestamp = timestamp;

  var y = -Math.abs(Math.sin(x));
  var fontSize = 4 + (y + 4) * 4;

  var splashtext = document.getElementsByClassName('splashtext');
  for (var i = 0; i < splashtext.length; i++) {
    splashtext[i].style.fontSize = fontSize + 'px';
  }
  requestAnimationFrame(updateTextSize);
}
requestAnimationFrame(updateTextSize);
