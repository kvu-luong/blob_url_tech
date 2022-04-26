function onload(){
	let xhr = new XMLHttpRequest();
	xhr.open('GET', './jisoo.jpg');
	xhr.responseType = 'arraybuffer';

	xhr.onload = function(e) {
		let blob  = new Blob([xhr.response]);
		let url = URL.createObjectURL(blob);

		console.log(url, 'image');

		let img = document.getElementById('image');
		img.src = url;
	}

	xhr.send();
}

function loadVideo(){
	let xhr = new XMLHttpRequest();
	xhr.open('GET', './vidoe.mp4');
	xhr.responseType = 'arraybuffer';
	
	xhr.onload = function(e) {
		let blob  = new Blob([xhr.response]);
		let url = URL.createObjectURL(blob);

		console.log(url, 'vid');

		let vid = document.getElementById('vid');
		vid.src = url;
	}

	xhr.send();
}