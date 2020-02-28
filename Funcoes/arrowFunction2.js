let comparaComThis = function (param) {
    console.log(this === param);
};

comparaComThis(global);

const obj = {};
comparaComThis = comparaComThis.bind(obj);
comparaComThis(global);
comparaComThis(obj);

let comparaComThisArrow = param => console.log(this === param);

comparaComThisArrow(obj);

// Mesmo se usar o bind, o 'this' da função arrow, não ira variar.