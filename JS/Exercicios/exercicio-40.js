/**
40) ​Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o conceito B e de 9,0 a 10,0 o conceito A. 
*/

function conceituarNota(vector) {
    vector.forEach(element => {
         switch (true) {
            case element >= 0 && element <= 4.9:
                console.log(`${element} = D`);
                break;
            case element >= 5.0 && element <= 6.9:
                console.log(`${element} = C`);
                break;
            case element >= 7.0 && element <= 8.9:
                console.log(`${element} = B`);
                break;
            case element >= 9.0 && element <= 10.0:
                console.log(`${element} = A`);
                break;
            default:
                console.log(`${element} = Nota inválida!`);
                break;
        }
    });
}

const vector = [0, 2.8, 5.8, 7.8, 9.1, 11.99];

conceituarNota(vector);