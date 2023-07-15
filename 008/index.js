let notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100];
console.log(notas);

function solucao(notas) {

    let media = null;
    let maior = notas[0];
    let menor = notas[0];

    for (let nota of notas) {
        media += nota;
        maior = nota > maior ? nota : maior;
        menor = nota < menor ? nota : menor;
    }
    media -= (maior + menor);
    media /= ((notas.length)-2);
    console.log(media);
}
solucao(notas);
