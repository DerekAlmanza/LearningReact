/* Desestructuración. */
/* Asignación desestructurante. */

const persona = {
    nombre: 'Steve',
    edad: '78',
    clave: 'Capitan America',
}

const {nombre, edad:edadPersona, clave} = persona;

console.log(`El nombre de la persona es: ${nombre}, su edad es de ${edadPersona} y el superhéroe es ${clave}`);

// Otra forma de desestructurar a partir de una función.

const getPersona = ({nombre,edad,rango = 'Capitán'}) => {
    console.log(nombre, edad, rango);
}

getPersona(persona);

// Ejercicio

const getPersonaEjercicio = ({nombre, clave}) => {
    return {
        nombreReal: nombre,
        nombreClave: clave,
        latlong: {
            lat: 13.432,
            long: -54.689,
        },
    }
}

const { nombreReal, nombreClave, latlong:{ lat, long } } = getPersonaEjercicio(persona);

console.log(nombreReal, nombreClave);
console.log(lat, long);