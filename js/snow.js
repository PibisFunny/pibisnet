// Canvas
var canvas = document.getElementById('snow');
var ctx = canvas.getContext('2d');

// Canvas size
canvas.width = window.innerWidth;
canvas.height = document.body.scrollHeight;

// Snowflake config
var snowflakes = [];
var numSnowflakes = 160;
for (var i = 0; i < numSnowflakes; i++) {
	snowflakes.push({
		x: Math.random() * canvas.width,
		y: Math.random() * canvas.height,
		//radius: Math.random() * 1 + 0.5,
            radius: Math.floor(Math.random() * 2 + 1),
		speed: Math.random() * 1 + 0.5
	});
}

// Draw snowflakes
function drawSnowflakes() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = "#fff";
	ctx.beginPath();
	for (var i = 0; i < numSnowflakes; i++) {
		var snowflake = snowflakes[i];
		ctx.moveTo(snowflake.x, snowflake.y);
		//ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2, true);
            ctx.fillRect(Math.floor(snowflake.x), Math.floor(snowflake.y), snowflake.radius, snowflake.radius);
	}
	ctx.fill();
	moveSnowflakes();
}

// Move snowflakes
function moveSnowflakes() {
	for (var i = 0; i < numSnowflakes; i++) {
		var snowflake = snowflakes[i];
		snowflake.y += snowflake.speed;

// This is the OLD function for snow drift, it makes sort of a nauseating effect
//var driftAngle = Math.atan2(Math.sin(snowflake.x / 100), Math.cos(snowflake.y / 100));
//		snowflake.x += Math.cos(driftAngle) * 0.3;

		var driftAngle = Math.atan2(Math.sin((snowflake.x + i * 5) / 100), Math.cos((snowflake.y + i * 5) / 100));
		snowflake.x += Math.cos(driftAngle) * 0.3;

		if (snowflake.y > canvas.height) {
			snowflake.y = -snowflake.radius;
			snowflake.x = Math.random() * canvas.width;
		}
	}
}

// Draw snowflakes on interval
setInterval(drawSnowflakes, 30);