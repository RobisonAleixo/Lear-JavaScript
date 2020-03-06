/* 
 * Callback = passar uma função e essa função será chamada quando um evendo 
 * acontecer.
 */

//const fabricantes = ["Mercedes", "BMW", "Ferrari"];
//fabricantes.forEach(fabricante => console.log(fabricante));

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

const notasBaixas = notas.filter(nota => nota < 7);


console.log(notasBaixas);