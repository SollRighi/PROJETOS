// const digitos = /\d+/;

// console.log(digitos.exec("tem o numero 100 aqui"));
// console.log(digitos.exec("tem o numero aqui"));

//----------------------- MATCH ---------------------

const frase = "o numero 100 esta aqui".match(/\d+/);
const frase2 = "o numero esta aqui".match(/\d+/);

console.log(frase);
console.log(frase2); //usado para informações a mais do resutado da exec q queremos encontrar
