/* Promises. */

import {getHeroById} from './importExport'

// Forma de hacerlo sin una función. 

// const promesa = new Promise((resolve, reject) => {

//     const heroe = getHeroById(5);

//     if (!heroe) reject('El héroe no se ha encontrado');
//     else resolve(heroe);

// });

// promesa
//     .then(heroe => {
//         console.log(heroe);
//     })
//     .catch(err => console.log(err));

const obtenerHeroe = (id) => {

    const promesa = new Promise((resolve, reject) => {

        const heroe = getHeroById(id);
    
        if (!heroe) reject('El héroe no se ha encontrado');
        else resolve(heroe);
    
    });

    return promesa;

}

obtenerHeroe(5)
    .then(heroe => console.log(heroe))
    .catch(err => console.warn(err));