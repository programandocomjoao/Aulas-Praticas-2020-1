function calcularDelta() {
	var A = Number(document.getElementById('A').value);
	var B = Number(document.getElementById('B').value);
	var C = Number(document.getElementById('C').value);

	var delta = Math.pow(B, 2) - 4 * A * C;

	document.getElementById('delta').value = delta;
}

function calcularComprimento() {
	var raio = document.getElementById('raio').value;

	var C = 2 * Math.PI * raio;
	C = C.toFixed(2);

	document.getElementById('C').value = C;
}

function calcularArea() {
	var raio = document.getElementById('raio').value;

	var A = Math.PI * Math.pow(raio, 2);
	A = A.toFixed(2);

	document.getElementById('A').value = A;	
}

function calcularVolume() {
	var raio = document.getElementById('raio').value;

	var V = 3 / 4 * Math.PI * Math.pow(raio, 3);
	V = V.toFixed(2);

	document.getElementById('V').value = V;	
}