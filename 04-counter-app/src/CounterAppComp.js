// Si vemos que algo empieza con use significa que será un Hook
import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

const CounterApp = ( { value = 0 }) => {

	const [contador, setContador] = useState(value); // useState retorna un arreglo

    // Crear un evento de manera externa.
	/**
	 * Evento para agregar +1 al contador
	 */
    const handleAdd = () => {
		// setContador( (c) => c + 1 );
        setContador(contador + 1);
    }

	/**
	 * Evento para resetear al contador
	 */
	 const handleReset = () => {
		// setContador( (c) => c + 1 );
        setContador(value);
    }

	/**
	 * Evento para restar -1 al contador
	 */
	 const handleSubstract = () => {
		// setContador( (c) => c + 1 );
        setContador(contador - 1);
    }

    return (
    	<>
    		<h1>CounterApp</h1>
    		<h2> { contador } </h2>

        	{/* Otras maneras de escribir la función onClick */}
        	{/* <button onClick={ () => {
        	    var contador = 0;
        	    console.log(contador + 1);
        	}}> */}
        	{/* <button onClick={ () => handleAdd() }> */}
			<button onClick={ handleSubstract }> -1 </button>
			<button onClick={ handleReset }> Reset </button>
        	<button onClick={ handleAdd }> +1 </button>
      	</>
    )
}

// Verificando que el valor sea de tipo int.
CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;

