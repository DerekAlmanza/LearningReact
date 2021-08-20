import '@testing-library/jest-dom';
import { getArreglo } from "../../bases/desesctructurarArreglos";

describe('Pruebas en desestructurarArreglos.test.js', () => {

    // Primer test
    test(' Debe de retornar un string y un número ', () => {
        
        const arreglo = getArreglo(); 
        const [letras, numeros] = getArreglo();

        // Para comprobar que el arreglo sea el mismo.
        expect( arreglo ).toEqual( ['ABC', 123] );

        // Verifiando unitariamente el contenido de los arreglos y su tipo.
        expect( letras ).toBe('ABC')
        expect( typeof letras ).toBe('string');

        expect( numeros ).toBe(123);
        expect( typeof numeros).toBe('number');
    })
    
})
