//------------------------------IF ---------------------------------------
let idade = 19;

if(idade == 19){
    console.log("A idade é = 19");

}

if(idade > 25 ){
    console.log("Idade é maior que 25");
}

let nome = "Sol";
let passaporte = true;

if( (nome = "Sol" && idade > 30) || passaporte == true){
    console.log("Tudo certo2");
}

// --------------------------- ELSE ---------------------------------

let velocidade = 100;

if(velocidade <= 80){
    console.log("sem multa");
}else{
    console.log("com multa");
}

//-------------------------- ELSE IF -----------------------------------

let nome = "Sol";
let idade = 19;
if( nome != undefined && nome == "Joaquim"){
    console.log("o nome Sol está definido");
} 
else if( nome = "Sol" && nome.length > 2 && idade == 66){
    console.log("o nome está correto");
}
else if( nome = "Solzinha" || nome == Number){
    console.log("o nome não é solzinha e não é igual a um numero");
}
