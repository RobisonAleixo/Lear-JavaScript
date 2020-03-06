function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privada
    let velocidadeAtual = 0;

    // metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta;
        } else {
            velocidadeAtual = velocidadeMaxima;
        }
    }

    // metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual;
    }
}

const uno = new Carro;
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const brasiliaAmarela = new Carro(350, 20);
brasiliaAmarela.acelerar();
console.log(brasiliaAmarela.getVelocidadeAtual());