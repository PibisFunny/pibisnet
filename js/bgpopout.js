$('.bgApply').on('click', function () {
    let bg = $(this).css('background-image');

    let imgSrc = bg.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');

    $('#bgoverlayImg').attr('src', imgSrc);
    $('#bgoverlay').css('display', 'flex');
});

$('#bgoverlay').on('click', function () {
    $(this).hide();
    $('#bgoverlayImg').attr('src', '');
});