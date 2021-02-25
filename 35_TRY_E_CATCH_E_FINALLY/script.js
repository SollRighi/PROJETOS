
// let b = 2;


try {

  let a = 2 + b;

} catch (e) {

  console.log(e);

}

console.log("teste");

//mesmo com o erro do b sem definição, o try e catch nao para naquele erro e 
//registra o "teste", try e catch absorve o erro.

// -----------------------------------FINALLY (PODE SER USADO COM TRY E CATCH OU SO TRY TBM)----------------

// let b = 2;


try {

  let a = 2 + b;

} catch (e) {


} finally {
  console.log("executou");
}

//console.log("teste");