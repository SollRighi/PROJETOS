// const notab = /[^ab]/;

// console.log(notab.test("a")); // nao ceita a e b isoladamente 
// console.log(notab.test("aqui tem a")); // aceita palavras em conjunto 

// const notaz = /[^a-z]/;

// console.log(notaz.test("dsflh")); 
// console.log(notaz.test("aqui tem dgjfa"));
// console.log(notaz.test("6464"));

//--------------------------OPERADOR PLUS------------------------------------------

// const umOuMaisNumeros = /\d+/;

// console.log(umOuMaisNumeros.test("65354"));
// console.log(umOuMaisNumeros.test("  "));
// console.log(umOuMaisNumeros.test("slsdjhfj"));

//--------------------------- OPERADOR QUESTION ------------------------

// const padrao = /bacax?i/;

// console.log(padrao.test("abacaxi"));
// console.log(padrao.test("abacai"));

// const padrao2 = /\d+\w?/; // primeira precisa ser atendida e a seunda é opicional 

// console.log(padrao2.test("546"));
// console.log(padrao2.test("dfh4"));


//---------------------- OPERADOR DE PRECISÃO -----------------------------------

const telefone = /\d{4,5}-\d{4}/;

console.log("telefone");

console.log(telefone.test("9229-0054"));
console.log(telefone.test("992290054"));
console.log(telefone.test("1199229-0054"));

const telefoneDDD = /\(\d{2}\)\d{4,5}-\d{4}/;

console.log("telefone com ddd");

console.log(telefoneDDD.test("(51)99229-0054"));
console.log(telefoneDDD.test("(51)9229-0054"));
console.log(telefoneDDD.test("519229-0054"));
console.log(telefoneDDD.test("(51)92290054"));

const cep = /\d{5}-\d{3}/;

console.log("cep");

console.log(cep.test("93010-160"));
console.log(cep.test("93010160"));
console.log(cep.test("993010-160"));
console.log(cep.test("93010-1560"));
console.log(cep.test("10-60"));

// valida 5 ou mais numeros, 3 ou mais numeros 

