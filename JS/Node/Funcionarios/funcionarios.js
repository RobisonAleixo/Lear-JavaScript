const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

axios.get(url).then(response => {
    const funcionarios = response.data;

    const funcionarioChines = (funcionario) => funcionario.pais == 'China';
    const funcionarioFeminino = (funcionario) => funcionario.genero == 'F';
    const funcionarioMenorSalario = (funcionario, funcionarioAtual) => {
        return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual;
    }

    const resultado = funcionarios.filter(funcionarioChines).filter(funcionarioFeminino).reduce(funcionarioMenorSalario);

    console.log(resultado);

});