

//CALLBACK ASSINCONA//  A função setTimeout permite executar 2 segundos depois que todas as string executam

// console.log("1");

// setTimeout(function() {
//     console.log("5");
// }, 2000);

// console.log("2");
// console.log("3");
// console.log("4");

////// PROMISES ///////////////////

// let p = Promise.resolve(5); // consigo utilizar ela futuramente

// console.log("outros codigos");

// console.log(p);

// p.then((value) => {return value + 5})
// .then((value) => {console.log(value)});

////////// FALHA NAS PROMISES /////////////

// let p = Promise.resolve(new Error("não deu certo"));

// console.log("la, la, la");

// p.then((value) => console.log("deu certo: " + value))
// .catch(reason => console.log("Falhou: " + reason));

///////// REJEITANDO PROMISES ///////////

// function verificarNumero (num) {
//     return new Promise.resolve((resolve, reject) => {
//         if(num == 2) {
//             resolve(`o numero é ${num}`);
//         } else {
//             reject(new Error("Falhou"));
//         }
//     });
// }

// verificarNumero(2);
// verificarNumero(3);

////////// RESOLVENDO VARIAS PROMISES ///////////

// const p1 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve(1);
//     }, 5000);
// });


// const p2 = Promise.resolve(2);

// const p3 = new Promise((resolve,reject) => {
//     resolve(3);
// });
// console.log("oi")
// Promise.all([p1,p2,p3]).then((values) => console.log(values));

console.log("oi");







