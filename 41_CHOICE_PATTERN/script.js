const Reg = /\W+: (Matheus|João|Maria)/; //separados pelo apoiador de choice

console.log(Reg.test("Nome: Matheus"));
console.log(Reg.test("Nome: José"));
console.log(Reg.test("Nome: Maria")); // todos falso pois um estava errado



