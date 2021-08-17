import React from 'react';

const ImprimirVars = () => {
    // No imprime booleanos, arrays los concatena y objetos les debes dar formato.
    const saludo = 'Esta es una cadena creada con una variable';
    const arr = [1,2,3,4,5,6];
    const objetoNombre = {
        nombre: 'Matías',
        edad: 34
    }
    
    return (
        <>
            <h3> Imprimiendo string: { saludo } </h3>
            <p> Imprimiendo arreglo: { arr }</p>
            <pre> Imprimiendo objeto: { JSON.stringify(objetoNombre, null, 3) }</pre>
        </>
    );
}

export default ImprimirVars;