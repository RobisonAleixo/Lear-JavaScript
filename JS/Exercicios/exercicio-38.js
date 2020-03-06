/**
 38) ​Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor. 
 */

function imprimirImpares(min = 0, max = 100) {
    let impar = [];

    if (min > max) {
        [min, max] = [max, min];
    }

    for (let i = min; i <= max; i++) {
        if (i % 2 != 0) {
            impar.push(i);
        }
    }

    console.log(impar);
}

imprimirImpares(3, 78);
imprimirImpares(63, 7);