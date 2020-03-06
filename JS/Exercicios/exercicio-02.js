/*
 02)​ Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:  Equilátero: Os três lados são iguais. Isósceles:  Dois lados iguais. Escaleno: Todos os lados são diferentes.  Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).
*/

const classificarTriangulo = (ladoA, ladoB, ladoC) => {
    if (ladoA == ladoB && ladoB == ladoC) {
        console.log('Triângulo Equilátero!');
    } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
        console.log('Triângulo Isósceles!');
    } else {
        console.log('Triângulo Escaleno!');
    }
};

classificarTriangulo(10, 10, 10);
classificarTriangulo(10, 8, 10);
classificarTriangulo(8, 9, 1);