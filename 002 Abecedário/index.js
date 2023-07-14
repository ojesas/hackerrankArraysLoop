function solucao(letra, palavras) {
	somaErradas = 0;
	for (let palavra of palavras) {
		somaErradas += palavra[0] === letra ? 0 : 1;
	}
console.log(somaErradas);
}