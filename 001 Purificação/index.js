
stringCorrompida = "*Canis %lupus )familiaris";
//remover essses caracteres: !@#$%&*().
function solucao(stringCorrompida) {
    // seu codigo aqui
    let saida = "";
    for (let carac of stringCorrompida) {
        if ((carac === "!") || (carac === "@") || (carac === "#") || (carac === "$") || (carac === "%") || (carac === "&") || (carac === "*") || (carac === "(") || (carac === ")") || (carac === ".")) {
        } else {
        saida += carac;
        }


    }
    console.log(saida);
}

solucao(stringCorrompida);