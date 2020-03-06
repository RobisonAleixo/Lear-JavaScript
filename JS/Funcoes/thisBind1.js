const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao);
    }
};

pessoa.falar();
const falar = pessoa.falar;
falar(); // Conflito entre paradigmas: funcional e OO.
         // o 'this' aponta para outro objeto que não tem
         // 'saudacao' dentro dele = undefined.

const falarDePessoa = pessoa.falar.bind(pessoa);
                     // a função bind faz com que o 'this' sempre
                     // se referencie ao objeto pessoa.
falarDePessoa();