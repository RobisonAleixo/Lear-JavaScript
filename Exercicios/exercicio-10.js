/*
10) ​Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true ou false. 
*/

function divisivelPorTres(numero) {
    return numero % 3 == 0 ? true : false;
}

console.log(divisivelPorTres(15));
console.log(divisivelPorTres(14));