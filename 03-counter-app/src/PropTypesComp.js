// Proptypes es un verificador de tipos que se usa en su mayoría para la captura de errores.

import React from 'react';
import PropTypes from 'prop-types';

const RetornarPropTypes = ({ saludo, saludo2 }) => {

    return (
        <>
            <h2> { saludo } </h2>
            <p> 
                Proptypes es un verificador de tipos que se usa en su mayoría para la captura de errores. 
                El 123 se imprimirá pero con error en la consola.
            </p>
            <h2> {saludo2 }</h2>
            <p>
                En este caso al poner un dato equivocado imprimirá en la consola igual el error, pero en el 
                archivo estamos solicitando que necesariamente sea de tipo String.
            </p>
        </>
    )
} 

// Esto está verificando el tipo de dato, así sabemos que el saludo debe de ser de tipo String.
RetornarPropTypes.propTypes = {
    saludo: PropTypes.string,
    saludo2: PropTypes.string.isRequired
};

export default RetornarPropTypes;