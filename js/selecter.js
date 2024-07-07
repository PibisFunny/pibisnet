var icons = document.querySelectorAll('.icon');

icons.forEach(function(icon) {
  icon.addEventListener('click', function(event) {

    icons.forEach(function(icon) {
      icon.classList.remove('selected');
    });

    event.currentTarget.classList.add('selected');

    event.stopPropagation();
  });

  icon.addEventListener('dblclick', function(event) {

    icons.forEach(function(icon) {
      icon.classList.remove('selected');
    });

    event.stopPropagation();
  });
});

document.addEventListener('click', function() {

  icons.forEach(function(icon) {
    icon.classList.remove('selected');
  });
});
