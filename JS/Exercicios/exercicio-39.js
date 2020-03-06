/**
 * 39) ​Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente. Faça a troca sem utilizar uma variável auxiliar. 
 */

function trocarVector(vector1, vector2) {

    [[vector1], [vector2]] = [[vector2], [vector1]]

    console.log(`1-Vector: ${vector1}`);
    console.log(`2-Vector: ${vector2}`);
}

let vector1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let vector2 = [11, 12, 13, 14, 15, 16, 17, 18, 19];

trocarVector(vector1, vector2);