
Object.prototype.atrr0 = 'Z'; // Não é recomendado!
const avo = {atrr1: 'A'};
const pai = { __proto__: avo, atrr2: 'B', atrr3: 'ZZ'};
const filho = { __proto__: pai, atrr3: 'C'};

console.log(filho.atrr0, filho.atrr1, filho.atrr2, filho.atrr3);

const carro = {
    velAtua: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtua + delta <= this.velMax) {
            this.velAtua += delta;
        } else {
            this.velAtua = this.velMax;
        }
    },
    status() {
        return `${this.velAtua}Km/h de ${this.velMax}Km/h`;
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324
};

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`;
    }
}

Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

console.log(ferrari);
console.log(volvo);

volvo.acelerarMais(100);
console.log(volvo.status());

ferrari.acelerarMais(300);
console.log(ferrari.status());