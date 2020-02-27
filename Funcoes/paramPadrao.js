// Estrategia para gerar valor padrão
function soma(a, b, c) {
    a = a || 1;
    b = b || 1;
    c = c || 1;

    return a + b + c;
}

soma();  /* Como não foi passado nenhum parametro será atribuido
          * o valor padrão 1 => a + b + c = 3
          */

soma(3);         // 3 + b + c = 5
soma(3, 2, 1);   // 3 + 2 + 1 = 6
soma(0, 0, 0);   /* Como 0 será considerado falso pela 
                   * função será atribuido o valor pádrão, 
                   * nesse exemplo 1   
                   */

function soma2(a, b, c) {
    a = a != undefined ? a : 1;
    b = b != undefined ? b : 1;
    c = isNaN(c) ? 1 : c;   /* se não houver valor passar será undefine,
                             * logo, será atribuido 1, se for um numero,
                             * 0 inclusive, ele mantera o numero passado.
                             */

    return a + b + c;
}
console.log(soma2(3, 3, 0));

function soma3(a = 1, b = 1, c = 1) {
    return a + b + c;
}