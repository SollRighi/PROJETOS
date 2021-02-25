// let idade = 15

// if (idade >= 18) {
//   console.log("pode entrar")

// }

//----------------------//-------------------------------------

// const nome = "Sol";

// if (nome == "Sol") {
//   console.log("acertou miserávi");
    
//   }

//--------------------------//-------------------------------

// let numero = 100;

// if (numero <= 80) {
//   console.log("não leva multa");
  
// } else {
//     console.log("leva multa")
  
// }

//----------------------------//--------------------

// let idade = 18;

// let CNH = false;

// if (idade >= 18 && CNH == true ) {
//   console.log("Pode dirigir");
 
// } else if (idade >= 18 && CNH == false) {
//   console.log("tem idade pra dirigir, porem nao tem cnh");
  
// } else {
//     console.log("nao pode dirigir")
  
// }

//-----------------------------//-------------------

// let numero = 0;

// while (numero <= 10) {
//   console.log(numero);
  
//   numero++;
// }

//-----------------------------------//-------------

// for (numero = 100; numero > 50; numero--) {
//   console.log(numero);
// }

//-------------------------------//---------------

/* Quando queremos fazer um loop de 0 a 50 e dizer qual é par 
e qual é impar */

for (numero = 0; numero <= 50; numero++){

  if ( numero % 2 == 0 ) {
    console.log(`O numero ${numero} é par.`);
    
  } else {
      console.log(`O numero ${numero} é ímpar.`)
    
  }
}