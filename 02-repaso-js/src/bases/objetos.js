/* Objeto lilterales. */

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 50,
    direccion: {
        ciudad: 'Nueva York',
        latitud: 98.783,
        longitud: 14.273,
    }
};

// Diferentes representaciones en consola.
console.log(persona);
console.log({persona});
console.table(persona)

const persona2 = {...persona};

persona2.nombre = 'Bruce';
persona2.apellido = 'Banner';

console.log(persona);
console.log(persona2);