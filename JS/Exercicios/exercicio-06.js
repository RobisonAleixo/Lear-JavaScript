/*
06)​ Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos. 
*/

function formarValor(valor) {
    return `R$ ${valor.toFixed(2).toString().replace('.', ',')}`;
}

function jurosSimples(capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    let montante = capitalInicial + (capitalInicial * taxaDeJuros * tempoDeAplicacao);
    return formarValor(montante);
}

function jurosCompostos(capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    let montante = capitalInicial;
    for (let i = tempoDeAplicacao; i >= 1; i--) {
        montante += montante * taxaDeJuros;
    }
    return formarValor(montante);
}

console.log('Juros Simples: ' + jurosSimples(1200, 0.02, 15));
console.log('Juros Compostos: ' + jurosCompostos(1200, 0.02, 15));