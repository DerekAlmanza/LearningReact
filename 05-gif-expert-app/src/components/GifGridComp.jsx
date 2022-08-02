import React, { useState, useEffect } from 'react'
import { GifGridItemComp } from './GifGridItemComp';
import { obtenerGif } from '../helpers/obtenerGif';
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types';

export const GifGridComp = ( {categoria} ) => {

    const [imagenes, setImagenes] = useState([]);

    const {data, loading} = useFetchGifs(categoria);

    // UseEffect sirve para ejecutar código a partir de una condicional
    useEffect(() => {
        obtenerGif( categoria )
            .then(imgs => setImagenes(imgs))
            .catch(err => console.log(err));
    },[ categoria ]); // Por si llegara a cambiar la categoría.

    return (
        <>
            <h3> {categoria.toUpperCase()} </h3>
            {loading && <p className='animate__animated animate__flash'>Loading</p>}
            <div className="organiza-items">
                {
                    imagenes.map((imagen) => {
                        return (
                            <GifGridItemComp key={imagen.id} {...imagen} />
                        )
                    })
                }
            </div>
        </>
    )
}

GifGridComp.propTypes = {
    categoria: PropTypes.string.isRequired
};
