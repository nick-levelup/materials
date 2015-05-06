document.addEventListener('keydown', listenerkeydown);
document.addEventListener('DOMContentLoaded', documentReady);
window.addEventListener('beforeunload', beforeunload);

function listenerMouseDown (event) {
	var element = event.target,
		style = getComputedStyle(element),
		width = parseInt(style.width) / 2,
		height = parseInt(style.height) / 2;

	document.addEventListener('mousemove', listenerMouseMove);

	element.style.top = (event.clientY - width) + 'px';
	element.style.left = (event.clientX - height) + 'px';
}

function listenerMouseMove (event) {
	var element = event.target,
		style = getComputedStyle(element),
		width = parseInt(style.width) / 2,
		height = parseInt(style.height) / 2;

	element.style.top = (event.clientY - width) + 'px';
	element.style.left = (event.clientX - height) + 'px';
}

function listenerMouseUp (event) {
	document.removeEventListener('mousemove', listenerMouseMove);


}

function listenerkeydown () {
	console.log(event.keyCode)
}

function documentReady () {
	var div = document.querySelector('.good');

	div.addEventListener('mousedown', listenerMouseDown);
	div.addEventListener('mouseup', listenerMouseUp);

	var img = document.getElementsByTagName('img')[0];

	img.addEventListener('error', function () {
		console.log('error')
	});

	console.log('documentREADY')
}

function beforeunload (event) {
	event.returnValue = 'ALARM!'

	return 'ALARM!'
}