/**
 * Criando um metodo no prototype de String
 */

String.prototype.reverse = function() {
    return this.split('').reverse().join('');
};

console.log('Robison'.reverse());
