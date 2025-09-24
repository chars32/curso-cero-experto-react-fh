const arreglo = [1, 2, 3, 4];

// No se debe utilizar push para agregar objeto al arreglo
// push modifica todo el arreglo, lo mejor es usar spread operator
// arreglo.push(5);

// spread operator
let arreglo2 = [...arreglo, 5];

// map
const arrelgo3 = arreglo2.map((x) => {
  return x * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arrelgo3);
