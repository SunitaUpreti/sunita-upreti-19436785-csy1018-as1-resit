function menuBar(){
	document.getElementsByTagName('nav')[0].classList.toggle('active');
}

function click() {
	var x = document.getElementsByClassName("menubtn");
	x[0].addEventListener('click', menuBar);
}
document.addEventListener('DOMContentLoaded',click);