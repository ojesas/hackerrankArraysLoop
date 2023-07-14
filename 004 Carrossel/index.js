
let sequencia = ">>><>";

function solucao(sequencia) {
	//seu codigo aqui

	let carrosel = [0, 1, 2, 3, 4, 5, 6];
	let saida = null;
	let temp = null;
	for (i = 0; i < sequencia.length; i++) {
		if (sequencia[i] === ">") {
			temp = carrosel.shift();
			carrosel.push(temp);

		} else if (sequencia[i] === "<") {

			temp = carrosel.pop();
			carrosel.unshift(temp);

		}
	}
	saida = carrosel[0];
	console.log(saida);
}

solucao(sequencia);