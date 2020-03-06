
function criarPessoa() {
    return {
        nome: 'Ana',
        idade: 23
    };
}

console.log(criarPessoa());


function criarProduto(nome, preco) {
    return {
        nome: nome,
        preco: preco,
        desconto: 0.1
    };
}

console.log(criarProduto('Notebook', 2199,49));