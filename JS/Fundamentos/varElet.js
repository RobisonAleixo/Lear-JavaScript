/*
 * Variavel VAR
 */

if (true) {
    var a = 500;    
    console.log('a dentro do if ' + a);     //a existe
}

console.log('a fora do if ' + a);     // a existe

function teste() {
    var b = 501;
    console.log('b dentro da funcao ' + b);     //a existe
}

// console.log('b fora da funcao ' + b);  //a não existe = is not defined.

/****   Variaveis declaradas com 'var ' tem escopo de função.   *****/

/*
 * Variavel LET
 */

if (true) {
    let c = 500;    
    console.log('c dentro do if ' + c);     //c existe
}

console.log('c fora do if ' + c);     // c NÃO existe

// Mesma coisa acontece com função, só existe dentro do escopo da função.

/****   Variaveis declaradas com 'let' tem escopo de bloco.   *****/