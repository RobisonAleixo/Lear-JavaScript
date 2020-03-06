/*
03)​ Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.  
*/

const exponenciacao = (base, expoente) => {
    let result = 1;
    for(let i = 1; i <= expoente; i++) {
        result *= base;
    }

    console.log(result);
};

exponenciacao(23,2);