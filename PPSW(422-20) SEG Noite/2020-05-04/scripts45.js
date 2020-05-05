function somar() {
	var n1 = document.getElementById('n1').value;
	var n2 = document.getElementById('n2').value;

	n1 = Number(n1);
	n2 = Number(n2);

	document.getElementById('resultado').value = n1 + n2;
}

function subtrair() {
	var n1 = document.getElementById('n1').value;
	var n2 = document.getElementById('n2').value;

	n1 = Number(n1);
	n2 = Number(n2);

	document.getElementById('resultado').value = n1 - n2;
}

function multiplicar() {
	var n1 = document.getElementById('n1').value;
	var n2 = document.getElementById('n2').value;

	n1 = Number(n1);
	n2 = Number(n2);

	document.getElementById('resultado').value = n1 * n2;
}

function dividir() {
	var n1 = document.getElementById('n1').value;
	var n2 = document.getElementById('n2').value;

	n1 = Number(n1);
	n2 = Number(n2);

	document.getElementById('resultado').value = n1 / n2;
}