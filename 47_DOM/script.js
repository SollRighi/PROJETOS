// console.log(document);

//mostra tudo o que tem no html (espelho do html)

//--------------------acessando elementos tags-------------------

// console.log(document.body.childNodes); <-- ta dando erro, so consigo acessar 
//diretamente no console

// para acessar mais detalhes do html atraves do dom posso colocar 
//document.childNodes[1] 

//ou document.childNodes[1].childNodes;

//------------------Encontrando elementos--------------

// -> getElementsByTagName;
// -> getElementsbyId;
// -> getElementsByClassName;
// -> querySelector;

console.log(document.getElementsbyTagName("h1")); // esta forma nao funciona, 
//só funciona chamando diretamente no console.

