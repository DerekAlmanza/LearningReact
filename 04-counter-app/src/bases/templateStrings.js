/* Template Strings. */

const nombre = 'Lolito';
const apellido = 'Gomez';

// Comentamos los console. log porque sino se ejecutan también
// console.log(`Mi nombre es ${nombre} ${apellido}`);

export const getSaludo = (nombre = 'Daniel') => {
    return `Hola ${nombre}`;
}

// Comentamos los console. log porque sino se ejecutan también
// console.log(`Estoy mandando a llamar la función saludo: ${saludo("Pancracio")}`);