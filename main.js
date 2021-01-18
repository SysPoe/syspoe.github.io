function onLoad() {
	console.log(window.location.hash);
	if (window.location.hash == "#Instamessage") {
		Instamessage();
	}
	var worker = new Worker('paralax.js');

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