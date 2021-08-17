import React from 'react';

export const Propiedades = ( {saludoProp} ) => {
    // Podemos crear las props desde la consola de componentes del navegador.
    console.log(saludoProp);
    return ( 
        <p> { saludoProp } </p>
    );
}

// Con esta función estamos creando la propiedad 
// export const PropiedadesOtraForma = ( { saludo='Hola mundo' }) => {

//     return (
//         <p> { saludo } </p>
//     )
// }

export default Propiedades;


