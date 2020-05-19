function calcularDelta() {
	var A = Number(document.getElementById('A').value);
	var B = Number(document.getElementById('B').value);
	var C = Number(document.getElementById('C').value);

	var delta = Math.pow(B, 2) - 4 * A * C;

	document.getElementById('delta').value = delta;
}

function calcularComprimento() {
	var raio = Number(document.getElementById('raio').value);

	var C =  2 * Math.PI * raio;
	C = C.toFixed(2);

	document.getElementById('C').value = C;
}

function calcularArea() {
	var raio = Number(document.getElementById('raio').value);

	var A = Math.PI * Math.pow(raio, 2);
	A = A.toFixed(2);

	document.getElementById('A').value = A;
}

function calcularVolume() {
	var raio = Number(document.getElementById('raio').value);

	var V = 0.75 * Math.PI * Math.pow(raio, 3);
	V = V.toFixed(2);

	document.getElementById('V').value = V;
}

function escolherCalculadora() {
	if (document.getElementById('delta').checked == true)
		window.open("pagina49.html");
	  // window.location.replace("pagina49.html");
	else if (document.getElementById('esfera').checked == true)
				 window.open("pagina50.html");
  			 //window.location.replace("pagina50.html");
  		 else
  		 	 window.alert("Você deve marcar uma das 2 calculadoras!!!");
}

function calcular() {
	var n1 = Number(document.getElementById('n1').value);
	var n2 = Number(document.getElementById('n2').value);
  var resultado = 0;
  var opcao;

  if (document.getElementById('adicao').checked == true)
  	opcao = '+';
  else if (document.getElementById('subtracao').checked == true)
  	      opcao = '-';
  	   else if (document.getElementById('multiplicacao').checked == true)
               opcao = '*';
            else if (document.getElementById('divisao').checked == true)
                    opcao = '/';

  switch(opcao) {
  	case '+': resultado = n1 + n2; break;
  	case '-': resultado = n1 - n2; break;
  	case '*': resultado = n1 * n2; break;
  	case '/': resultado = n1 / n2; break;
  }
	
  document.getElementById('resultado').value = resultado;
}



