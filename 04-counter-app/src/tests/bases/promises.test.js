import '@testing-library/jest-dom';
import { obtenerHeroeAsync } from '../../bases/promises';
import heroes from '../../data/heroes';


describe('Pruebas con promises.test.js', () => {
    
    // Primer test.
    test('obtenerHeroe Debe de retornar un Héroe async', ( done ) => {

        // Se debe de agregar un catch, porque en caso de que falle la prueba no exceda el tiempo de
        // la prueba por el done.
        obtenerHeroeAsync(1)
            .then(heroe => {
                expect( heroe ).toBe( heroes[0] ); // Comprobando que sea el héroe Batman
                done();
            })
            .catch(done);

    });

    // Segundio test
    test('Debe de retornar un error si el id del héroe no existe', ( done ) => {
        
        // Igualmente se debe de hacer un segundo catch en caso de que el expect falle.
        obtenerHeroeAsync(100) // No existe el id 100
            .catch(error => {
                expect( error ).toBe('El héroe no se ha encontrado');
                done();
            })
            .catch(done)

    });
});