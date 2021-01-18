function onLoad() {
	console.log(window.location.hash);
	if (window.location.hash == "#Instamessage") {
		Instamessage();
	}
	setTimeout(scrollLoop(), 1000);
}
function Instamessage() {
	document.getElementById('nav').style.display = 'none';
	document.getElementById('instamessage').style.display = 'block';
	document.title = "Instamessage By SysPoe";
	window.location.hash = "#Instamessage";
}
function ProjectsBySyspoe() {
	document.getElementById('nav').style.display = 'block';
	document.getElementById('instamessage').style.display = 'none';
	document.title = "Projects By SysPoe";
	window.location.hash = "";
}

var xScrollPosition;
var yScrollPosition;

function scrollLoop() {
	while (true) {
		xScrollPosition = window.scrollX;
		yScrollPosition = window.scrollY;

		setTranslate(0, yScrollPosition * -0.2, document.getElementById("test"));

	}
}

function setTranslate(xPos, yPos, el) {
	el.style.transform = 'translate3d(' + xPos + 'px,' + yPos + 'px,0)';
}