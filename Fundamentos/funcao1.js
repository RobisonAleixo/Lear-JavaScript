
// Funçao sem retorno
function printSum(n, n2) {
    console.log(n + n2);
}

printSum(10,2);    // 12
printSum(2);       // 2 + undefined = NaN
printSum(2,5,4,6); // Passa os 2 argumentos e ignora os demais.
printSum();        // NaN

// Função com retorno
function sum (a, b = 0) {   // caso não receba o parametro b, 
                            // 0 será atribuido por padrão.
    return a + b;
}

console.log(sum(2, 3));