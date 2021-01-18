var xScrollPosition;
var yScrollPosition;

function scrollLoop() {
	xScrollPosition = window.scrollX;
	yScrollPosition = window.scrollY;

	setTranslate(0, yScrollPosition * -0.2, document.getElementById("test"));

	requestAnimationFrame(scrollLoop);
}

function setTranslate(xPos, yPos, el) {
	el.style.transform = 'translate3d(' + xPos + 'px,' + yPos + 'px,0)';
}

self.addEventListener('message', function (e) {
	if (e.data == "start") {
		while (true) {
			scrollLoop();
		}
	}
});