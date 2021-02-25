let arr = [1,2,3,4,5];
let arr2 = [2,3,4];

function interarArray (arr) {
  if (arr.lenght == 0 ) {
    throw new Error ("O array precisa ter pelo menos um elemento");
  }else {
    for ( let i = 0; i < arr.lenght; i++ ) {
      console.log(i);
    }
  }
}

function arrayVazio(arr) {
  if (arr.lenght > 0) {
    throw Error ("O array nao pode ter elementos");

  }else {
    console.log("agr deu certo");
  }
}

interarArray(arr);
interarArray(arr2);


// no curso deu tudo certo mas aqui nao apareceu no console

