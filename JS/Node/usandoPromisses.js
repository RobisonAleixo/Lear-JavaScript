// Com promisse
const http = require('http');

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = '';
            res.on('data', dados => { resultado += dados; });
            res.on('end', () => {
                try { resolve(JSON.parse(resultado)); } 
                catch (e) { reject(e); }
            });
        });
    });
}

// // Bagunça
// let nomes = [];
// getTurma('A').then(alunos => {
//     nomes = nomes.concat(alunos.map(a => `Turma A - ${a.nome}`));
//     getTurma('B').then(alunos => {
//         nomes = nomes.concat(alunos.map(a => `Turma B - ${a.nome}`));
//         getTurma('C').then(alunos => {
//             nomes = nomes.concat(alunos.map(a => `Turma C - ${a.nome}`));
//             console.log(nomes);
//         });
//     });
// });

// Melhor
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))   // Todos as turmas em um mesmo Array
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message))