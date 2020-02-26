var a = 3;
let b = 4;

var a = 30; // variaveis declaradas com var podem ser sobrescritas
b = 40;     // o mesmo não ocorre com variaveis declaradas com let

console.log(a, b);

const c = 5;    // uma constante não pode ser alterada
let d = c;      // d recebe a referência de memória da constate c
console.log(d);

d = 10;     // alteração na variável d não afeta o valor da variável c

console.log(c);
console.log(d);
