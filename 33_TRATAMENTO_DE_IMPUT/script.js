function checarNumero (num) {
  let number = Number (num);
  if (Number.isNaN(number)) {
    alert("por favor, passe apenas numeros para o programa");

  } else {
    return number;
  
  }
}

checarNumero (5);
checarNumero("skdgf");

let number = prompt ("digite um numero");

checarNumero (number);


