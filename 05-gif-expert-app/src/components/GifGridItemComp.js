import React from 'react'

export const GifGridItemComp = ( {id, title, url}) => {

    console.log( id, title, url );

    return (
        <div className="contenedor-imagen animate__animated animate__backInDown">
            <div>
                <img className="imagen__estilo" src={ url } alt={title} />
                <p className="titulo-imagen__estilo"> {title} </p>
            </div>
        </div>
    )
}
