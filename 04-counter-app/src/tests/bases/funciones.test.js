import { getUsuario, getUsuarioActivo } from '../../bases/funciones';

describe('Pruebas en funciones.test.js', () => {

    // Primera prueba.
    test('getUsuario debe retornar un objeto', () => {

        const usuario = getUsuario();

        const usuarioTest = {
            uid: 'FEF123',
            username: 'Ferras'
        }

        // No funciona el toBe ya que aunque los objetos son los mismos están apuntando 
        // a una dirección de memoria distinta.
        // expect( usuario ).toBe( usuarioTest );
        expect( usuario ).toEqual( usuarioTest );
    })

    // Segunda prueba.
    test('getUsuarioActivo debe retornar un objeto', () => {
        
        const nombre = 'Leonardo';
        const usuario = getUsuarioActivo(nombre);

        const usuarioTest = {
            uid: 'ABC567',
            username: nombre
        }

        expect( usuario ).toEqual( usuarioTest );
    })
    
})