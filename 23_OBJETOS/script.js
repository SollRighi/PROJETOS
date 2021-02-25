
// let pessoa = {
//   nome : "Sol",
//   profissão : "programadora",
//   idade : 20,

// }

// console.log(pessoa.nome);
// console.log(pessoa.idade);

//[] = array, {} = objeto 

////////////////////////CRIANDO E EXCLUINDO PROPRIEDADES//////////////////////////////////

// let pessoa = {
//   nome : "matheus",
//   idade : 29,
//   profissão : "programador",

// }

// console.log(pessoa.nome);
 
// delete pessoa.nome;

// console.log(pessoa.nome);

// console.log(pessoa);

// pessoa.casado = false;

// console.log(pessoa.casado);


/////////////////////////////////////

// let namorado = {
//   nome : "Pedro",
//   altura : 1.80,
//   idade : 22,

// }

// let eu = {
//   nome : "sol",
//   altura : 1.67,
//   idade : 20

// }

// console.log(namorado);

// Object.assign(namorado, eu);

// console.log(namorado);

///////////////////////OBJECT KEYS///////////////////////

// let obj = {
//   chave1 : 1,
//   chave2 : 2,
//   chave3 : 3,
// }

// console.log(obj);

// console.log(Object.keys(obj));

///////////////////////////MUTAÇÃO//////////////////////////

// let pessoa = {
//   nome : "sol",
// }

// let pessoa2 = pessoa;

// console.log(pessoa2 == pessoa);

// pessoa2.nome = "pedro";

// console.log(pessoa.nome);

// pessoa.nome = "maria";

// console.log(pessoa.nome);


///////////////////////////////// Destructuring ///////////////////

let obj = {
  rodas: 4,
  portas: 4,
  tetosolar: true,
  motor: "2.0"
}

const { rodas: vRodas, portas: vportas, tetosolar: vtetosolar, motor: vmotor} = obj;

console.log(vRodas);
console.log(vportas);
