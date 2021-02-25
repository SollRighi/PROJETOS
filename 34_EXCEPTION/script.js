function saudacao (nome) {
  if(typeof nome != "string") {
    throw new erro ("o parametro nome precisa ser uma string");
  } else {
    console.log(`ola ${nome}.`);

  }
}

saudacao("matheus");
saudacao(5);

 console.log("teste");
 
