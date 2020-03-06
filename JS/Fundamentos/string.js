const escola = "robison";

console.log(escola.charAt(4));  // retorna o 4º caracter da string.
console.log(escola.charAt(8));  // não retorna nada.
console.log(escola.charCodeAt(4));  // retorna o cod. unicode do caracter.
console.log(escola.indexOf('b'));  // retora a posicao do caracter.
console.log(escola.substr(1));  // retorna os caract. apartir do indice 1
console.log(escola.substr(2,3));    // retorna: bis

console.log('Aluno: '.concat(escola).concat('!')); // concatena...

console.log(escola.replace('r', 'R'));      // Robison

console.log('Robison,Ana,Maria,Pedro'.split(',')); // retorna um array

