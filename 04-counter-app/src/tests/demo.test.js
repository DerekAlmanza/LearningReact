// Agrupador de pruebas.
describe('Pruebas del archivo demo.test.js', () => {

    // Primera prueba.
    test('Primera prueba. Debe de ser True', () => {

        const activo = true;
    
        // Si no está activo, tirará el error y no pasará la prueba.
        if (!activo) throw new Error('No está activo');
    
    })

    // Segunda prueba.
    test('Debe de ser iguales los Strings', () => {
    
        // 1. Inicialización. 
        const mensaje = 'Hola mundo';
    
        // 2. Estímulo.
        const mensajePrueba = 'Hola mundo';
    
        // Observar el comportamiento.
        expect(mensaje).toBe(mensajePrueba);
    })
    
})
