function pic() {
	var bgm= [
'https://www.pibis.net/img/bg/bg_1.jpg',
'https://www.pibis.net/img/bg/bg_2.jpg',
'https://www.pibis.net/img/bg/bg_3.jpg',
'https://www.pibis.net/img/bg/bg_4.jpg',
'https://www.pibis.net/img/bg/bg_5.jpg',
'https://www.pibis.net/img/bg/bg_6.jpg',
'https://www.pibis.net/img/bg/bg_7.jpg',
'https://www.pibis.net/img/bg/bg_8.jpg',
'https://www.pibis.net/img/bg/bg_9_2.jpg',
'https://www.pibis.net/img/bg/bg_10.jpg',
'https://www.pibis.net/img/bg/bg_11.jpg',
'https://www.pibis.net/img/bg/bg_12.jpg',
'https://www.pibis.net/img/bg/bg_13.jpg',
'https://www.pibis.net/img/bg/bg_14.jpg',
'https://www.pibis.net/img/bg/bg_15_2.jpg',
'https://www.pibis.net/img/bg/bg_16.jpg',
'https://www.pibis.net/img/bg/bg_17.jpg',
'https://www.pibis.net/img/bg/bg_18.jpg',
'https://www.pibis.net/img/bg/bg_19.jpg',
'https://www.pibis.net/img/bg/bg_20.jpg'
];


for (let i = bgm.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [bgm[i], bgm[j]] = [bgm[j], bgm[i]];
}


$('.bgApply').css({
    'background':'url('+bgm[0]+') no-repeat',
    'background-position':'100%',
    'background-size':'cover'
});
}

// OLD randomization (replaced with fisher-yates)
//$('.bgApply').css({
//	'background':'url('+bgm[Math.floor(Math.random()* bgm.length)]+') no-repeat',
//	'background-position':'100%',
//	'background-size':'cover'
//});

	// body...

pic();
