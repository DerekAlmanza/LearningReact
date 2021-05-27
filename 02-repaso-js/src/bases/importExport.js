/* Import, export y funciones comunes de arreglos. */
import heroes, { propietarios } from '../data/heroes';
// Esta funciona con el exports default import heroes from './data/heroes'

console.log(heroes);
console.log(propietarios);

// Ejercicio. Obtener heroe por medio del id.

export const getHeroById = (id) => {
    return heroes.find(heroe => heroe.id === id);
}

console.log(getHeroById(2));

// Obtener heroes por medio del propietario del héroe.

const getHeroByOwner = (owner) => {
    return heroes.filter(heroe => heroe.owner === owner);
}

console.log(getHeroByOwner('DC'));
