import React, { useState } from 'react'

export const AgregarCategoria = () => {

	const [value, setValue] = useState('Escribe una categoría a agregar');

	/**
	 * Función que se encarga de recibir el valor del input
	 */
	const cambiarValor = (e) => {
		setValue(e.target.value);
	}

	/**
	 * Función del form realizada para que no se actualice el form automáticamente.
	 */
	const subirInfoManualmente = (e) => {
		e.preventDefault();
	}

    return (
        <form onSubmit={subirInfoManualmente}>
        	<h3> Agregar Categoria </h3>
        	<input 
				type='text' 
				placeholder={value}
				onChange={cambiarValor}
			/> 
        </form>
    )
}
