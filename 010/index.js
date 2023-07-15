let resultados = ["V", "E", "V", "E"];

function solucao(resultados) {
    let saida = 0;
    for (let resultado of resultados) {
        if (resultado == "V") { saida += 3; }
        else if (resultado == "E") { saida++; }
    }
    console.log(saida);
}

solucao(resultados);
