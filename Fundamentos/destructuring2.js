
// Usando destructing para extrair os valores do objeto, que será passado
// para a função.
function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

/*
 * Observação: 
 * Declaração chave/valor no objeto é feita pelo :
 * Para a extração do dado com destructing é feito pelo =
 */

const obj = { max: 50, min: 40 };
console.log(rand(obj));
// console.log(rand()); // irá gerar erro, pois a função irá tentar desestruturar algo que está undefined ou null.