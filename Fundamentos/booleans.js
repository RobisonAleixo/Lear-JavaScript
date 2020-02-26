let isActive = false;
console.log(isActive);

isActive = true;
console.log(isActive);

isActive = 1;
console.log(!!isActive);    // Força uma conversão para True or False

console.log('verdadeiros...');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isActive = true)); // o valor atribuido para a variavel 
                                  // será avaliado se é true or false

console.log('falsos...');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);

console.log('' || null || 0 || 'Ola'); // Irá retornar o primeiro valor
                                       // verdadeiro que for 'encontrado'.

let nome = '';
console.log(nome || 'Robison') /* Caso não haja nada atribuido a variavel
                                * nome (será undefined) entao o valor
                                * 'Robison' será atribuido a ela.
                                */

