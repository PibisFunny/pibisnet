function pic() {
	var bgm= [
'https://cdn.pixabay.com/photo/2015/01/28/23/35/hills-615429_960_720.jpg',
'https://cdn.pixabay.com/photo/2016/10/22/17/46/mountains-1761292__340.jpg'
];


$('.baseWindow').css({
	'background':'url('+bgm[Math.floor(Math.random()* bgm.length)]+') no-repeat',
	'background-position':'100%',
	'background-size':'cover'
});

	// body...
}
pic();
