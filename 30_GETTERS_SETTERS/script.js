  class cachorro {
    constructor (raca, cor){
      this.raca = raca;
      this.cor = cor;
    
    }
    latir () {
      console.log("auau");

    }

    get getcor(){
      return this.cor;
    }

    set setcor(cor) {
      this.cor = cor;
    }

  }

  let pastor = new cachorro ("PASTOR ALEMAO", "SEM COR");

  console.log(pastor);

  pastor.setcor = "marrom";

  console.log(pastor.getcor);
