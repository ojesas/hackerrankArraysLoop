let precos = [30, 10, 54, 76, 1, 4, 35];


function solucao(precos) {
    let menorDif = 99999999999;
    for (let i = 0; i < precos.length; i++) {
        for (let j = i + 1; j < precos.length; j++) {
            let difTemp = (precos[i] - precos[j]);
            menorDif = (difTemp < menorDif) && (difTemp > 0) ? difTemp : menorDif;
        
        }

    }
    console.log(menorDif);
}

solucao(precos);