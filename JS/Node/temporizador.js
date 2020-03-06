const schedule = require('node-schedule');

// 5 em 5 minuto em qualquer minuto as 12horas, qualquer dia, qualquer mês, na terça feira
const tarefa1 = schedule.scheduleJob('*/5 * 12 * * 2', function () {
    console.log('Executando Tarefa 1!', new Date().getSeconds());
});

setTimeout(() => {
    tarefa1.cancel();
    console.log('Cancelando Tarefa 1!');
}, 20000);

