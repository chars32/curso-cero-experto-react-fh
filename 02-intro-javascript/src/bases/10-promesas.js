import { geHeroeById } from "./bases/09-Multiples exportaciones y exportaciones por defecto";

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const heroeById = geHeroeById(2);
//     // resolve(heroeById);
//     reject("No se puede encontrar el heroe");
//   }, 3000);
// });

// promesa
//   .then((heroeById) => {
//     console.log(heroeById);
//   })
//   .catch((err) => console.warn(err));

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroeById = geHeroeById(id);
      if (heroeById) {
        resolve(heroeById);
      } else {
        reject("El heroe no existe");
      }
    }, 3000);
  });
};

getHeroeByIdAsync(4)
  .then((heroe) => console.log("Heroe", heroe))
  .catch((err) => console.warn(err));
