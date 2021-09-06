import React, { useState, useEffect } from 'react'
import { GifGridItemComp } from './GifGridItemComp';

export const GifGridComp = ( {categoria} ) => {

    const [imagenes, setImagenes] = useState([]);

    // UseEffect sirve para ejecutar código a partir de una condicional
    useEffect(() => {
        obtenerGif();
    },[]);

    /**
     * Obtener gif por medio de peticion https usando fetch
     */
    const obtenerGif = async() => {

        const url = 'https://api.giphy.com/v1/gifs/search?q=matrix&limit=10&api_key=3YLDhXWv1S63xr8KcyczSPq3D3Xh4Ftb';
        const res = await fetch( url );
        const { data } = await res.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.original.url
            }
        })

        setImagenes(gifs);
    }

    return (
        <>
            <h3> {categoria.toUpperCase()} </h3>
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
