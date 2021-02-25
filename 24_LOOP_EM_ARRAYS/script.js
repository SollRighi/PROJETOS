
// let nomes = ["sol", "pedro"];

// for (let i = 0; i <= nomes.length; i++) {
//   console.log(nomes[i]);

// }

//////////////////////METODOS DE ARRAY - POP E PUSH ////////////////////

// let nomes = ["sol", "pedro"];

// let elementoRemovido = nomes.pop();

// console.log(elementoRemovido);
// console.log(nomes);

// nomes.push ("pedro");

// console.log(nomes);

///////////////////////// SHIFT UNSHIFT//////////////////////////////

// let carros = ["rodas", "portas", "direção", "air bag"];

// let elementoRemovido = carros.shift();

// console.log(elementoRemovido);
// console.log(carros);

// carros.unshift("freio a disco");

// console.log(carros);
// console.log(carros[0]);

//////////////////////// INDEXOF E LASTINDEXOF ////////////////////////////

// let nums = [5,6,2,4,9,6,2];

// console.log(nums.indexOf(2));

// console.log(nums.lastIndexOf(2));

/////////////////////////// SLICE ////////////////////////////

// let numeros = [1,2,3,4,5,6,7,8,9,];

// console.log(numeros.slice(4,5));

// console.log(numeros.slice(4,6));

// console.log(numeros.slice(2));

// console.log(numeros.slice(-2));

// //temos que pegar um aparametro a mais pq o indice seleciona o anterior ao que 
// //selecionamos, ou seja, queremos o 4, temos que por 4 e 5, queremos o 4,5 temos que por 4,6 etc

// console.log(numeros.slice(2));

// // caso eu colocar apenas um numero, ele vai pegar aquele numero e todos que vem depois 

// console.log(numeros.slice(-2));

// // quando colocamos -2 ele pega o ultimo e penultimo numeros da sequencia 


////////////////////////// FOREACH ////////////////////////////////

// let nomes = ["matheus", "maria", "jose"];

// nomes.forEach(nome => {
//   console.log("o nome é" + nome);
// })

//////////////////////// INCLUDES ///////////////////////////

// let carros = ["peogeot", "gol", "monza"];

// console.log(carros.includes("peogeot"));

///////////////////// reverse /////////////////////////////

// let numeros = [1,2,3,4,5,6,7];

// console.log(numeros.reverse());

//////////////////// Destructuring //////////////////////////////

let frutas = ["mamao", "banana", "laranja"];

let [frutasA, frutasB, frutasC] = frutas;

console.log(frutasA);
console.log(frutasB);
console.log(frutasC);






















