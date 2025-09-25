// Destructuración
// Asignación destructurante

const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
  rango: "soldado",
};

// const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const useContext = ({ nombre, edad, clave, rango = "Capitan" }) => {
  // console.log(`Mi nombre es ${nombre} ,soy ${clave} y mi rango es ${rango}`);
  return {
    nombreClave: clave,
    años: edad,
    latlng: {
      lat: 14.12345,
      lng: -12.3456,
    },
  };
};

const {
  nombreClave,
  años,
  latlng: { lat, lng },
} = useContext(persona);
console.log(nombreClave, años, lat, lng);
