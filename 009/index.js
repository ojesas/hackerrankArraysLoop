let palpite = "a";
let palavra = "abelha";

function solucao(palpite, palavra) {
    let cont = 0;
    for (let letra of palavra) {
        cont += (letra === palpite) ? 1 : 0;
    }
console.log(cont);

}
solucao(palpite, palavra);