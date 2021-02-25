

// const ValidaDominio = /[?www].\w+\.com.br|.com/;

// console.log(ValidaDominio.test("www.solzinha.com.br"));
// console.log(ValidaDominio.test("www.sol.com"));
// console.log(ValidaDominio.test("www.sol.br"));
// console.log(ValidaDominio.test("sol.com.br"));

/////////////////////////////////////// VALIDANDO E-MAIL ///////////////////////////////////////////////////

// const validandoEmail = /\w+@\w+\.\w+/;

// console.log(validandoEmail.test("slngvitoria@gmail.com"));
// console.log(validandoEmail.test("slngvitoriagmail.com"));
// console.log(validandoEmail.test("slngvitoria@gmailcom"));

//////////////////////////////////////// VALIDANDO DATAS DE NASCIMENTO ////////////////////////////////////////////////////////

const validarDataNasc = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;

console.log(validarDataNasc.test("08/09/2000"));
console.log(validarDataNasc.test("08/09"));
console.log(validarDataNasc.test("08092000"));

// ou seja, com regex podemos colocar a cada de 0-30, mes de 0-12, e o ano desejado pra conseguirmos delimitar uma área desejada