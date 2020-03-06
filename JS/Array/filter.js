const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false },
];


produtoCaro = produto => produto.preco >= 500;
produtoFragil = produto => produto.fragil;

console.log(produtos.filter(produtoCaro).filter(produtoFragil));