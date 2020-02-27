function Pessoa() {
    this.idade = 0;

    setInterval(function() {     // Nesse caso, o 'this' irá se referênciar 
        this.idade++;            // ao setInterval, uma vez que é o
        console.log(this.idade); // temporizador da função que dispara   
    }, 1000);                    // a função detro do objeto Pessoa.
};

new Pessoa;


/* SOLUÇAO 1
function Pessoa() {
    this.idade = 0;

    setInterval(function() {
        this.idade++;
        console.log(this.idade);
    }.bind(this), 1000); // USANDO O BIND
};
new Pessoa;
*/

/* SOLUÇAO 2
function Pessoa() {
    this.idade = 0;
    const self = this; // USANDO UMA CONSTATE PARA ARMAZENAR O VALOR DE THIS

    setInterval(function() {
        self.idade++;
        console.log(self.idade);
    }, 1000);
};
new Pessoa;
*/