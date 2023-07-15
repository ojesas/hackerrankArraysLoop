
let palavras = ["aveia", "manha", "ave"];
let primeiraLetra = "a";
let segundaLetra = "v";


function solucao(primeiraLetra, segundaLetra, palavras) {
	let saida = null;
	let cont = 0;
	for (let palavra of palavras) {

		if ((palavra[0] === primeiraLetra) && (palavra[1] === segundaLetra)) {
			console.log(palavra);
			cont++;
		} else {
			saida = "NENHUMA";
		}
	}
	if (cont === 0) {
		console.log(saida);
	}

}

solucao(primeiraLetra, segundaLetra, palavras);