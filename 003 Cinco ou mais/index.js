let precos = [100, 500, 100, 200, 50];

function solucao(precos) {

    let soma = 0;
    let tam_precos = precos.length;
    let menor = precos[0];

    for (let preco of precos) {
        soma += preco;
        menor = (preco > menor) ? menor : preco;
    }
    if (tam_precos >= 5) {
        soma -= menor;
    }
    console.log(soma);



}


solucao(precos);