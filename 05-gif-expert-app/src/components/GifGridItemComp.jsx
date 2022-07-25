import React from 'react';
import PropTypes  from 'prop-types';

export const GifGridItemComp = ( {id, title, url}) => {

    return (    
        <div className="contenedor-imagen animate__animated animate__backInDown">
            <div>
                <img className="imagen__estilo" src={ url } alt={title} />
                <p className="titulo-imagen__estilo"> {title} </p>
            </div>
        </div>
    )
}

GifGridItemComp.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};