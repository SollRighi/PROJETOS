
let novoElemento = document.createElement("p");
let texto = document.createTextNode("texto criado");

novoElemento.appendChild(texto);

let p = document.querySelector("#paragrafo-principal");
let pai = p.parentChild;

pai.appendChild(novoElemento);

// continua sem alterar nada 


