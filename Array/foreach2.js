const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

Array.prototype.forEach2 = function(func) {
    for(let i=0; i < this.length; i++) {
        let index = i;
        let value = this[i];
        
        func(value, index, this);
    }
};

aprovados.forEach2(function (valor, index){
    console.log(`${index}: ${valor}`);
});