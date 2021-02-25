// const pessoa = {
//   maos: 2,

// }


// console.log(Object.getprototypeof(pessoa));
// console.log(Object.getprototypeof(pessoa) == Object.prototype);

//////////////////////////////////////////////////////////

// const pessoa = {
//   maos: 2, 

// }
 
// const pessoaNova = Object.create(pessoa);

// console.log(pessoaNova.maos);

// console.log(Object.getPrototypeOf(pessoaNova) === pessoa);


////////////////////////////////////////////////////////

// EXEMPLO 1

// let cachorro = {
//   raca: "SRD",

// }

// let pastorAlemao = Object.create(cachorro);

// pastorAlemao.raca = "pastor Alemao";

// console.log(pastorAlemao.raca);

//EXEMPLO 2

// let pessoaFavorita = {
//   Pernas: 3,
//   cabelo: "grande",
//   barba: "SBD"
// }

// let barbaFeita = Object.create(pessoaFavorita);

// barbaFeita.barba = "bem bonita";

// console.log(barbaFeita.barba);

// EXEMPLO 3

// let gato = {
//   patas: 4,
//   raca: "SRD",
//   miar: function () {
//     console.log("miau miau");
//   }
// }

// let Tigresa = Object.create(gato);
// Tigresa.miar();

// Tigresa.raca = "tigresa";

// console.log(Tigresa.raca);
// console.log(gato.raca);

//EXEMPLO 4

// function CriaCao (raca, patas, cor) {
//   let Cao = Object.create({});
//   Cao.raca = raca;
//   Cao.patas = patas;
//   Cao.cor = cor;
// }

// let Scooby = CriaCao ("vira-lata", 4, "azul");

// console.log(Scooby);


//EXEMPLO DE NEW 

// function Gato (raca, patas, cor) {
//   this.raca =  raca;
//   this.patas = patas;
//   this.cor = cor;
//   this.miar = function () {
//     console.log("miau");
//   }
// }

// let tigre = new Gato ("tigre", 4, "rosa");

// tigre.miar();

//////////////////////////////////////////////





