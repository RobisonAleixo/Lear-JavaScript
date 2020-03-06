const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua do sabão',
        numero: 123
    }
};

const { nome, idade } = cliente;
console.log(nome, idade);

// retira os dados do objeto e renomeia.
const { nome: nomeCliente, idade: idadeCliente } = cliente; 
console.log(nomeCliente, idadeCliente);

const { sobrenome, bemHumorada = true } = cliente;
console.log(sobrenome, bemHumorada);

const { endereco: { logradouro, numero } } = cliente;
console.log(logradouro, numero);