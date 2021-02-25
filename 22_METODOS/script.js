// let marca = "nike";

// console.log(marca.toUpperCase());

// let marca2 = marca.toUpperCase();

// console.log(marca2.toLowerCase());

// console.log(typeof marca2.toLowerCase);

// //STRING.PROPRIEDADE
// //STRING.METODO()


///////////////////////////////// orientação de objetos - metodos //////////////////////////

const cachorro = {
  raca: "SRD",
  uivar: function () {
    console.log("auuuuuuuuuuuuu");
  },
  rosnar: function () {
    console.log("grrrrrrrrrrrrrr");
  },
  NovaRaca: function (raca) {
    this.raca = raca;
  
  }
}

console.log(cachorro.raca);

cachorro.NovaRaca("pastor alemao");

console.log(cachorro.raca);



