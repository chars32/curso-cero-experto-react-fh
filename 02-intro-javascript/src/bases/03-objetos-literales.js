const persona = {
  nombre: "Helena",
  apellido: "García",
  edad: 5,
  direccion: {
    ciudad: "New York",
    lat: 14.3232,
    lng: 34.923322,
    zip: 86030,
  },
};
// Cuando el nombre de una variable coincide con el nombre de la propiedad de un objeto,
// se puede usar un atajo en lugar de escribir `persona: persona`.
// console.log({ persona });

// Asingar a una nueva variable el valor de un objeto ya creado no crea una nueva copia de el objeto(persona)
// lo que hace es refenciar a la nueva variable(persona 2) al objeto ya existente y eso se puede ver con el siguiente
// ejemplo en el cual al cambiar el atributo nombre del objeto persona2, creeriamos que cambiamos el objeto persona2
// pero en realidad lo que hacemos es cambiar persona. Como se muestra en el siguiente ejemplo.
// const persona2 = persona;
// persona2.nombre = "Claudia";
// Para lograr el comportamiento deseado usamos un spreadoperator {...objeto}.
const persona2 = { ...persona };
persona2.nombre = "Claudia";

console.log(persona);
console.log(persona2);
