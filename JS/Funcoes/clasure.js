// Clasure é o escopo criado quando uma função é declarada
// é o escopo lexico ao qual ela foi declarada

const x = 'Global';

function fora() {
    const x = 'Local';
    function dentro() {
        return x;
    }
    return dentro;
}

const minhaFuncao = fora();
console.log(minhaFuncao());

/*
 * Como a função dentro foi criado no escopo lexico da função fora
 * o valor que será retornado será 'Local';
 */ 