import '@testing-library/jest-dom';
import heroes from '../../data/heroes';
import { getHeroById, getHeroByOwner } from '../../bases/importExport';

describe('Pruebas en importExport.test.js', () => {

    // Primer test.  Comprobando la función getHeroById con un id que sí existe.
    test('Debe de retornar un héroe por id', () => {
        
        const id = 1;
        // Obteniendo el heroe por medio de la función
        const heroeById = getHeroById(id);
        // Obteniendo el héroe por medio de la BD directamente.
        const infoHeroe = heroes.find(heroe => heroe.id === id);

        expect( heroeById ).toEqual( infoHeroe );
        
    });

    // Segundo test. Comprobando que regrese undefined si el id del héroe no existe.
    test('Debe de retornar un undefined si el héroe no existe', () => {
        
        // Obteniendo el heroe por medio de la función
        const heroeById = getHeroById(10); // ya que el id 10 no existe 

        expect( heroeById ).toBe( undefined );
    });

    // Tercer test. Comprobando que regrese un arreglo con los héroes de DC.
    test('Debe de retornar un arreglo con los héroes de DC', () => {
        
        const propietario = 'DC'
        const heroeByOwner = getHeroByOwner(propietario);
        const heroeInfo = heroes.filter( owner => owner.owner === propietario);
        
        expect( heroeInfo ).toEqual( heroeByOwner );
    });

    // Cuarto test. Comprobando que regrese un arreglo con los héroes de Marvel.
    test('Debe de retornar un arreglo con los héroes de Marvel', () => {
        
        const heroeInfo = getHeroByOwner('Marvel').length;

        expect( heroeInfo ).toEqual( 2 );
    });

    // Quinto test. Comprobando que regrese [] si el owner no se encuentra.
    test('Debe de retornar un [] si el owner no se encuentra', () => {
        
        const heroeInfo = getHeroByOwner('Propietario que no existe');

        expect( heroeInfo ).toEqual([]);
    });
    
});