const valores = [7, 'robison', 9.2];
console.log(valores[0], valores[1]);
console.log(valores[99]);  // retorna undefined

valores[3] = 'aleixo';
console.log(valores[3]);
valores[99] = 'Oliveira'; // Mostra o invervalo vazio dentro do Array.

console.log(`Tamanho do array ${valores.length}.`);
console.log(valores.push('5aass1a'));
console.log(valores);
console.log(valores.pop());     // exclui o último valor do array
console.log(valores);

delete valores[0];  // exclui o valor no index setado.

console.log(typeof valores);
