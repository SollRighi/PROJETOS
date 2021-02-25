// class mamífero {
//   constructor (patas) {
//     this.patas = patas;
//   }
// }

// let coiote = new mamífero (4);

// console.log(coiote.patas);

// class cachorro extends mamífero {
//   constructor (patas, raca) {
//     super (patas, patas);
//     this.raca = raca;

//   }

//   latir () {
//     console.log("auau");

//   }

// }

// let pug = new cachorro (4, "pug");

// console.log(pug.patas);

/////////////////////////INSTANSOF///////////////////////////////////


class mamífero {
  constructor (patas) {
    this.patas = patas;
  }
}

let coiote = new mamífero (4);

console.log(coiote.patas);

class cachorro extends mamífero {
  constructor (patas, raca) {
    super (patas, patas);
    this.raca = raca;

  }

  latir () {
    console.log("auau");

  }

}

let pug = new cachorro (4, "pug");

console.log(pug.patas);

console.log(new cachorro instanceof mamífero);

console.log( coiote instanceof mamífero);

