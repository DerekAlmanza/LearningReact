import '@testing-library/jest-dom';
import { getImagen } from '../../bases/asyncAwait';

describe('Pruebas para asyncAwait.test.js', () => {
    
    // Primer test.
    test('Debe retornar si el url del GIF es válido', async() => {
        
        const url = await getImagen();

        // Comprobaremos que el url sí sea un url y no un error, incluyendo https://
        expect(url.includes('https://')).toBe(true);
    });
});