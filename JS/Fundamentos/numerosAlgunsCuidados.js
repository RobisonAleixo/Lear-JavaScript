console.log(7 / 0);         // Infinity
console.log('10' / 2);      // 5
console.log('5' + 2);       /* 52 -> string tem preferencia nesse 
                             * caso irá concatenar e não somar os
                             * valores.
                             */
console.log('Show' * 2);    // NaN
console.log(0.1 + 0.7);     // 0.79999 (Gera uma imprecisão!,
                            // adota-se essa especificação, algumas 
                            // linguagens, para ganhar desempenho.)

// console.log(10.toString());  essa conversão não pode ser realizada
//                              em numeros literais.

console.log((10.554).toString());   // Colocando entre () funciona!