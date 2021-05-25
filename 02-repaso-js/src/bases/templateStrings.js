/* Template Strings. */

const nombre = 'Lolito';
const apellido = 'Gomez';

console.log(`Mi nombre es ${nombre} ${apellido}`);

const saludo = (nombre) => {
    return `Hola ${nombre}`;
}

console.log(`Estoy mandando a llamar la función saludo: ${saludo("Pancracio")}`);