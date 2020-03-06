
/*
 * Irá receber um array que irá extrait os dados com destructuring
 * caso o min seja > que o max irá inverter a ordem...
 */ 

function rand([min = 0, max = 1000]) {

    console.log('Min: ' + min, 'Max: ' + max);

    if (min > max) {
   //Destructuring = Array criado com os dados do destructuring 
        [min, max] = [max, min]; 
        const valor = Math.random() * (max - min) + min;
        return Math.floor(valor);
    }
}

console.log(rand([50, 40]));