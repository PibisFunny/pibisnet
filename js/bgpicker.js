function pic() {
	var bgm= [
'https://www.pibis.net/img/bg/bg_1.jpg',
'https://www.pibis.net/img/bg/bg_2.jpg',
'https://www.pibis.net/img/bg/bg_3.jpg',
];


$('.baseWindow').css({
	'background':'url('+bgm[Math.floor(Math.random()* bgm.length)]+') no-repeat',
	'background-position':'100%',
	'background-size':'cover'
});

	// body...
}
pic();
