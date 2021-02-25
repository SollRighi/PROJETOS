// const pontoRegex = /./;

// console.log(".");
// console.log(pontoRegex.test("jsdf"));
// console.log(pontoRegex.test(6445));
// console.log(pontoRegex.test("  "));
// console.log(pontoRegex.test("244djghkjf"));

// const dRegex = /\d/; //mesma coisa que digitar /[0-9]/

// console.log("d");
// console.log(dRegex.test("jsdf"));
// console.log(dRegex.test(6445));
// console.log(dRegex.test("  "));
// console.log(dRegex.test("244djghkjf"));

// const dRegex2 = /\D/; //[^0-9]/ (contrario de numeros, passarao as frases que tem letras ou espaço)

// console.log("D");
// console.log(dRegex2.test("jsdf"));
// console.log(dRegex2.test(6445));
// console.log(dRegex2.test("  "));
// console.log(dRegex2.test("244djghkjf"));

// const sRegex = /\s/; //espaços vazios, quebras de linha ou ate tabs

// console.log("s");
// console.log(sRegex.test("jsdf"));
// console.log(sRegex.test(6445));
// console.log(sRegex.test("  "));
// console.log(sRegex.test("244djghkjf"));

// const wRegex = /\w/; //so aceita numeros e letras (alfanumerico)

// console.log("w");
// console.log(wRegex.test("jsdf"));
// console.log(wRegex.test(6445));
// console.log(wRegex.test("  "));
// console.log(wRegex.test("244djghkjf"));

// //LETRA MAIUSCULA É A NEGAÇÃO DA LETRA MINUSCULA 


//------------------------ CARACTERES ESPECIAIS NA PRATICA ----------------------------------

const dia = /\d\d/; //o primeiro mesmo tendo 4 digitos vai dar true pq contem dois numeros tbm 

console.log("dia");
console.log(dia.test("2019") && "2019".length == 2);  
console.log(dia.test("fgfg"));
console.log(dia.test("22") && "22".length == 2);
console.log(dia.test("ldhsfk1"));

const PalavraPeloMenosTresLetras = /\w\w\w/; //se ja tem tres caracteres ele atende a expressao regular 

console.log("PalavraPeloMenosTresLetras");
console.log(PalavraPeloMenosTresLetras.test("gdf"));  
console.log(PalavraPeloMenosTresLetras.test("fgfg"));
console.log(PalavraPeloMenosTresLetras.test("d"));







