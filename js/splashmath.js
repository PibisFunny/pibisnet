var x = 0;
function updateTextSize() {
  x += 0.04;
  var y = -Math.abs(Math.sin(x));

  var fontSize = 4 + (y + 4) * 4;

  var splashtext = document.getElementsByClassName('splashtext');
  for (var i = 0; i < splashtext.length; i++) {
    splashtext[i].style.fontSize = fontSize + 'px';
  }
  requestAnimationFrame(updateTextSize);
}
updateTextSize();