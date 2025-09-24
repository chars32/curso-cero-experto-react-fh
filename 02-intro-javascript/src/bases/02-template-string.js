const nombre = "Carlos";
const apellido = "García";

// Para usar el template string usamos los caracteres ``
// y para llamar una variable usamos el siguiente formato
// ${nombre de variable, expresiones, etc, en JS}

const nombreCompleto = `Hola mundo ${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombre) {
  return "Hola " + nombre; // Esto es concatenacion no template strinmg
}

console.log(`Este es un texto: ${getSaludo("Helena")}`);
