/* Promises. */

import {getHeroById} from './importExport'

export const obtenerHeroeAsync = (id) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const heroe = getHeroById(id);
    
            if (!heroe) reject('El héroe no se ha encontrado');
            else resolve(heroe);
        }, 500)
    });

}

// obtenerHeroe(5)
//     .then(heroe => console.log(heroe))
//     .catch(err => console.warn(err));