/* Funciones en JS. */

const saludar = (nombre) => {
    return `Hola ${nombre}`;
}

console.log(saludar('Tobías'));

// Ejercicio. 

const getUsuarioActivo = (nombre) => ({
    uid: 'ABC567',
    username: nombre,
});

let usuario = getUsuarioActivo('Pablo');

console.log(`Hola ${usuario.uid}, tu nombre es ${usuario.username}`);