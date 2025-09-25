import heroes, { owners } from "./data/heroes";

console.log(owners);

const geHeroeById = (id) => {
  return heroes.find((heroe) => heroe.id === id);
};

console.log(geHeroeById(1));

const getHeroresByOwner = (owner) => {
  return heroes.filter((heroe) => heroe.owner === owner);
};

console.log(getHeroresByOwner("DC"));
