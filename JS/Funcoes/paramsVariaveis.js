function soma() {
    let soma = 0;
    for( i of arguments) {
        soma += i;
    }
    return soma;
}

console.log(soma(10,20,20));
console.log(soma(10,20,20, 'casa'));
