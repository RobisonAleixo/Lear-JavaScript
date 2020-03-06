const prod1 = {}; // Criando um objeto dinamicamente.
prod1.nome = 'Celular xyz';
prod1.valor = 4988.00;
prod1['Desconto promocao'] = 0.40 // evitar atributos com espaço.

console.log(prod1);

const prod2 = {     // criando um objeto usando notação literal.
    nome: 'TV',
    preco: 7998.50
};

console.log(prod2);