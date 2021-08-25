// defaultProps sirve para asignarle a una propiedad un valor por default.
// Un beneficio es que de esta manera en la parte de componentes en el área de depuración del navegador veremos al valor del componente.

import React from 'react';

const RetornarDefaultPropTypes = ( {saludo, subtitulo }) => {
    return (
        <>
            <h2> {saludo} </h2>
            <h3>{subtitulo}</h3>
        </>
    )
}

RetornarDefaultPropTypes.defaultProps = {
    saludo: 'Este es un título generado por defecto con defaultProps',
    subtitulo: 'Este es un subtítulo generado por defecto con defaultProps'
}

export default RetornarDefaultPropTypes;