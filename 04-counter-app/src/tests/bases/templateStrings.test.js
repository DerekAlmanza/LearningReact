// Autocompletado de jest
import '@testing-library/jest-dom';

import {getSaludo} from '../../bases/templateStrings';

describe('Pruebas en templateStrings.test.js', () => {
    
    // Primer test.
    test('Probando getSaludo. Hola Lola', () => {

        const nombre = 'Lola';
        const saludo = getSaludo(nombre);
        
        expect(saludo).toBe(`Hola ${nombre}`);
    })

    // Segundo test.
    test('Si getSaludo no recibe parámetro retornar Hola Daniel', () => {
        const saludo = getSaludo();
        expect(saludo).toBe(`Hola Daniel`)
    })
    
})