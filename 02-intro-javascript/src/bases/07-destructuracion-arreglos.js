const personajes = ["Goku", "Vegeta", "Trunks"];

const [p1] = personajes;

const [, , p3] = personajes;

console.log(p1);
console.log(p3);

const retornaArreglo = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

// Tarea
// 1. El primer valor se llamara nombre
// 2. el seundo se llamara  setNombre

const useState = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola mundo");
    },
  ];
};

const [nombre, setNombre] = useState("Goku");
console.log(nombre);
setNombre();
