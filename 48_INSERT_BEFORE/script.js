
let novoElemento = document.createElement("p");
let texto = document.createTextNode("texto criado");

novoElemento.appendChild(texto);

let elementoAlvo = document.querySelector("#titulo-principal");
let elementoPai = document.querySelector("#primeira-div");


elementoPai.insertBefore(novoElemento, elementoAlvo);

// ERRO: ncaught TypeError: Não é possível ler a propriedade 'insertBefore' de nulo
//    em script.js: 11

//nao consigo executar no console nada do que fiz aqui!


