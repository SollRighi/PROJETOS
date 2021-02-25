// let x = 10;

// if ( x > 5 ) {
//   let x = 20;
//   console.log(x);
//   x++;
  
// }

// console.log(x);


//---------------------------- ESCOPO DENTRO DE ESCOPO -----------------------------

let a = 10;

function multiplicar(x,y) {

  a = x * y;

  if ( a > 10) {

    let a = 20;

    a++
    
    console.log(a);

  }

  console.log(a);

}

console.log(a);

//fiz este exercício porem nao apareceu valores diferentes no console como devia.

