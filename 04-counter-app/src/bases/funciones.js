/* Funciones en JS. */

const saludar = (nombre) => {
    return `Hola ${nombre}`;
}

// Comentamos esto para que no se ejecute en las pruebas.
// console.log(saludar('Tobías'));

export const getUsuario = () => ({
    uid: 'FEF123',
    username: 'Ferras'
});

// Ejercicio. 

export const getUsuarioActivo = (nombre) => ({
    uid: 'ABC567',
    username: nombre,
});

// let usuario = getUsuarioActivo('Pablo');

// Comentamos esto para que no se ejecute en las pruebas.
// console.log(`Hola ${usuario.uid}, tu nombre es ${usuario.username}`);