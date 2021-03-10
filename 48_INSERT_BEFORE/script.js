
let novoElemento = document.createElement("p");
let texto = document.createTextNode("texto criado");

novoElemento.appendChild(texto);

let elementoAlvo = document.querySelector("pode crer meu parça");
let elementoPai = document.querySelector ("#primeira-div");

elementoPai.insertBefore(novoElemento, elementoAlvo);

//refazer, texto nao foi criado 

