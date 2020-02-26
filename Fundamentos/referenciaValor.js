const objeto = {
    nome: 'Robison',
    idade: 32
};

const obj2 = objeto;       /* só copiou o endereço de memoria
                            * mudança no objeto era afetar tanto
                            * objeto quanto obj2 
                            */ 

obj2.idade = 33;

console.log(objeto.idade);
console.log(obj2.idade);

/*
 * O objeto por não se tratar de um tipo primitivo em JS,
 * a constante 'objeto' irá armazenar o endereço de memória 
 * do objeto (endereco = memoria heap; objeto = memoria stack)
 * 
 * Já no caso de tipos primitivos o é armazenado diretamente o 
 * valor na memoria (heap), no caso de uma copia irá copiar o 
 * valor.
 */

 let numero = 1;
 let numero2 = numero;

 numero2 = 3;

 console.log(numero);
 console.log(numero2);