// function saudação () {
//   console.log("hello world")
  
// }

// saudação ();

////////////////////////////////////////////////////////////////////////////////////////

// function suaIdade ( idade ) {
//   console.log(`voce tem ${idade} anos`);

// }

// suaIdade(20);

///////////////////////////////////////////////////////////////////////////////////

// function soma ( a, b) {
//   return  a + b ;
  
// }

// console.log(soma(2,7));

///////////////////////////////////////////////////////////////////////

// function numeroAleatorio (num) {
//   return Math.floor(Math.random() * num) + 1;
  
// }

// console.log(numeroAleatorio(10));
// console.log(numeroAleatorio(100));
// console.log(numeroAleatorio(50));

//////////////////////////////////////////////////////////////////////

// function entrarPraAutoEscola ( idade ) {

//   if ( idade >= 18 ) {
//     console.log("pode entrar");
    
//   } else {
//     console.log("não pode entrar");
    
//   }
  
// }

// entrarPraAutoEscola(15);
// entrarPraAutoEscola(20);
// entrarPraAutoEscola(17);

///////////////////////////////////////////////////////////////

// function tipoDeDado ( dado ) {

//   if ( typeof dado === "string") {
//     console.log("este dado é uma string");

//   } else if (typeof dado === "number") {
//     console.log("este dado é um number");

//   } else if (typeof dado === "boolean" ) {
//     console.log("este dado é um boolean");
    
//   }
// }

// tipoDeDado(true);
// tipoDeDado(23);
// tipoDeDado("teste");

////////////////////////////////////////////////////


// function numerosPos (numNegativo) {
//   return Math.abs (numNegativo)
// }

// console.log(numerosPos(-5));
// console.log(numerosPos(25));
// console.log(numerosPos(-12));

////////////////////////////////////////////////////////

// function tamanhoDoTexto (texto) {

//   if (texto.length > 10) {
//     console.log( "texto muito longo ");
    
//   } else { 
//     console.log("texto dentro do limite");
    
//   }
  
// }

// tamanhoDoTexto("eu amo a minha vo, adorei ficar perto dela mas senti raiva do pedro");
// tamanhoDoTexto("eu me amo");

///////////////////////////////////////////

// function potencia  ( a,b ) {
//   // return Math.pow (a,b);
//   return a ** b;
// }

// console.log(potencia(2,7));
// console.log(potencia(14, 5));
// console.log(potencia(20, 8));
// console.log(potencia( 3,6));

///////////////////////////////////////////////

function imprimePar (Num) {

  for ( let i = Num; i >= 0; i--) {
    if (i % 2 == 0) {
      console.log(i);
      
    }
  }
  
}

imprimePar(15);
imprimePar(10);
imprimePar(5);
imprimePar(20);