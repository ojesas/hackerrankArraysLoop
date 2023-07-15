let disparos = [0, 50, 90, 80, 100, 80, 40];
function solucao(disparos) {
    
    let cont = 0;
    let saida = null;
    for (let disparo of disparos) {
        cont += disparo > 70 ? 1 : 0;
    }
    if (cont > 2) {
        saida = cont;
    } else {
        saida = "ELIMINADO";
    }
console.log(saida);
}

solucao(disparos);