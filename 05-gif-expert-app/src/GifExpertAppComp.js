import React, { useState } from "react";
import { AgregarCategoria } from "./components/AgregarCategoriaComp";

const GifExpertApp = () => {

    // Lo comentamos ya que no se puede ir modificando el arreglo de manera dinámica.
    // const categorias = ['matrix', 'simpsons', 'party'];

    const [categorias, setCategorias] = useState(['matrix', 'simpsons', 'party']);

    /**
     * Función encargada de agregar una nueva categoría. Se usa como referencia pero usaremos esto como
     * un componente en el archivo ./components/AgregarCategoriaComp.js
     */
    // const agregarCategoria = () => {
    //     setCategorias(() => {
    //         const nuevaCategoria = prompt('Inserta una categoria');
    //         return [...categorias, nuevaCategoria]
    //     });
    // }

    return (
    <>
        <h2 className='titulo'>GifExpertApp</h2>
        <AgregarCategoria />
        <hr />

        {/* <button onClick={agregarCategoria}> Agregar </button> */}

        <ol className='lista__categorias'>
            {
                categorias.map((categoria) => {
                    // Key es el id único de cada elemento
                    return <li key={categoria}> {categoria} </li>
                })
            }
        </ol>
    </>);
}

export default GifExpertApp;