//EXPRESSAO REGULAR ----------------------------------------------------------

// const reg1 = new RegExp( "bola" );

// console.log(reg1.test("tem bola?"));
// console.log(reg1.test("nao tem"));

// const reg2 = /bola/;

// let text = "tem bola na cesta";

// console.log(reg2.test("tem bola?"));
// console.log(reg2.test("nao tem"));
// console.log(reg2.test(text));

// console.log(/quadrado/.test("onde esta o circulo"));

//CONJUNTO DE CARACTERES ----------------------------------------------------

const reg1 = /[12345]/;

console.log(reg1.test("temos o numero 6"));
console.log(reg1.test("temos o numero 2"));
console.log(reg1.test("temos o numero 23"));
console.log(reg1.test("temos o numero 60"));

const reg2 = /[0-9]/; //jeito mais facil pra verificar se uma string (frase) tem numero

console.log(reg2.test("temos o numero 65"));
console.log(reg2.test("temos o numero"));