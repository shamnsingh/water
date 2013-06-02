right = 1;
bottom = 100;
speed = 10000;
addBack();
// addCould(id, bottom, right/left, scale)
// Speed : 5000 - 10000.
// Bottom : 100 - 1000.
// Scale : 0.5 - 1.
// 0 : Go right, 1 : Go left.
// animateCloud(id, speed, right/left)

var counter = 1;

function myLoop() {
	setTimeout(
		function exec() {
			right = -1 * right;
			bottom = Math.floor((Math.random() * 1000 + 1));
			speed = 5000 + Math.floor((Math.random() * 10000 + 1));
			ratio = 0.5 + (Math.random() * 0.5);
			addCloud("image" + counter, bottom, right, ratio);
			animateCloud("#image" + counter, speed, right);
			counter += 1;

			if (counter < 50) {
				myLoop();
			}
		}, 2000);
}

addCloud("image" + 0, bottom, right, 0.85);
animateCloud("#image" + 0, 8000, right);
myLoop();

function addBack() {
	var image =  document.getElementById("back");
	image.src="back.png";
	image.style.bottom = "5px";
	image.style.position = "absolute";
}

function addCloud(param, bottom, position, scale) {
	var image = document.createElement("img");
	image.src = "cloud.png";
	image.id = param;
	var src = document.getElementById("clouds");
	image.style.opacity = 0.5;
	image.style.width = 286 * scale;
	image.style.height = 'auto';
	image.style.bottom = bottom;
	image.style.position = "absolute";

	if (position == 1) {
		image.style.right = 0;
	} else {
		image.style.left = 0;
	}
	src.appendChild(image);
}

function animateCloud(param, speed, position) {
	if (position == 1) {
		$( param ).stop().animate({
			right: [ window.innerWidth ]
		}, speed, 
		function() {
			$( param ).animate({
				opacity : 0
			}, 1000);
		});
	} else {
		$( param ).stop().animate({
			left: [ window.innerWidth ]
		}, speed,
		function() {
			$( param ).animate({
				opacity : 0
			}, 1000);
		});
	}
}
