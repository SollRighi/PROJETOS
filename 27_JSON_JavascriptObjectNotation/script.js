// let pessoa = {
//   "nome": "sol",
//   "idade": 20
// }

// console.log(pessoa.nome);
// console.log(pessoa.idade);

// nao apareceu no console 

/////////////////////////// de JSON PARA STRING ///////////////////////////////

let pessoa = {
  "nome": "sol",
  "idade": 20,
  "profissao": "programadora",
  "hobbies": ["ler, filmes, bike"]

}

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);
//console.log(pessoatexto.nome);

let pessoaJSON = JSON.parse(pessoaTexto);

console.log(pessoaJSON);

