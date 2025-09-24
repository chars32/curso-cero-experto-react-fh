// Variables y constantes

// var -> ya no se debe de usar NUNCA JAMAS

// const -> valores que no van a cambiar
// let -> valores que pueden cambiar

const nombre = "Carlos";
let apellido = "Garcia";

let valorDado = 5;
valorDado = 6;

console.log(nombre, apellido, valorDado);

// Varaibles de SCOPE
// El valor de la variable valorDado dentro de una condicion, no es el mismo
// que el de la variable valorDado que esta fuera de la condicion.
// Esto es tanto para const o let.
if (true) {
  let valorDado = 6;
  const nombre = "Helena";

  console.log(valorDado);
  console.log(nombre);
}
