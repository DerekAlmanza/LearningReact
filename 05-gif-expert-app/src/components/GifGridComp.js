import React, { useState, useEffect } from 'react'

export const GifGridComp = ( {categoria} ) => {

    // const [contador, setContador] = useState(0);

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

        console.log(gifs);
    }

    return (
        <>
            <h3> {categoria} </h3>
        </>
    )
}
