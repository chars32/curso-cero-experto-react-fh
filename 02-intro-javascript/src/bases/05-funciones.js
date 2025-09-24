// Funciones en JS

// const saludar = function (nombre) {
//   return `Hola ${nombre}`;
// };

// console.log(saludar("Goku"));

// Arrow function con return explicito
const saludar2 = (nombre) => {
  return `Hola ${nombre}`;
};

// Arrow function con retorno implicito
const saludar3 = (nombre) => `Hola ${nombre}`;

// Arrow function que retorna implicitamente un objeto literal
// envolviendo el objeto entre parentesis
const getUser = () => ({
  id: "a1223s",
  username: "El_barto",
});

console.log(saludar2("Helena"));
console.log(saludar3("Claudia"));
console.log(getUser());

// Tarea
const getUserActive = (nombre) => ({ uuid: "ABC567", username: nombre });
const userActive = getUserActive("Carlos");
console.log(userActive);
