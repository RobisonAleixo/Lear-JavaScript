const modulaA = require('../../moduloA');

console.log(modulaA.ateLogo);

const http = require('http');
http.createServer((req, res) => {
    res.write('Bom dia!');
    res.end();
}).listen(8080);
