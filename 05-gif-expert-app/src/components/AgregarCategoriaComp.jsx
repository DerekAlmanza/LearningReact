import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AgregarCategoria = ({setCategorias, categorias}) => {

	const [value, setValue] = useState('');

	/**
	 * Función que se encarga de recibir el valor del input
	 */
	const cambiarValor = (e) => {
		setValue(e.target.value);
	}

	/**
	 * Función del form realizada para que no se actualice el form automáticamente.
	 */
	const subirInfoManualmente = (e) => e.preventDefault();

	/**
	 * Función que le dará al botón la funcionalidad de agregar la categoría
	 */
	const agregaCategoria = () => {

		if( value.trim().length > 1) {
			setCategorias([value, ...categorias]);
			setValue('');
		}
	}

    return (
        <form onSubmit={subirInfoManualmente}>
        	<h3> Agregar Categoria </h3>
        	<input 
				type='text' 
				value={value}
				placeholder='Escribe una categoría a agregar'
				onChange={cambiarValor}
			/>
			<div className='contenedor'>
				<div className="boton__agrega">
					<button onClick={agregaCategoria}>
            		    <span>Agregar</span>
            		</button>
				</div>
			</div> 
        </form>
    )
}

AgregarCategoria.propTypes = {
	categorias: PropTypes.array.isRequired,
	setCategorias: PropTypes.func.isRequired
};
