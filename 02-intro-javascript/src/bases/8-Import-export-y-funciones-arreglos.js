import { heroes } from "../data/heroes";

// find
const geHeroeById = (id) => {
  return heroes.find((heroe) => heroe.id === id);
};

console.log(geHeroeById(1));

// filter
const getHeroresByOwner = (owner) => {
  return heroes.filter((heroe) => heroe.owner === owner);
};

console.log(getHeroresByOwner("DC"));
