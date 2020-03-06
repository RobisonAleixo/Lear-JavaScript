const nums = [1,2,3,4,5];

let resultado = nums.map(function(element) {
    return element * 2;
});

console.log(resultado);

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 33.95 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
];

let preco = carrinho.map(function(element) {
    let obj = JSON.parse(element);
    const { preco } = obj;
    return preco;
});

console.log(preco);

// ou 

const paraObjeto = json => JSON.parse(json);
const apenaPreco = produto => produto.preco;
const resultado2 = carrinho.map(paraObjeto).map(apenaPreco);
console.log(resultado2);