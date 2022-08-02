import {fireEvent, render, screen} from '@testing-library/react';
import { AgregarCategoria } from '../../src/components/AgregarCategoriaComp';

describe('Pruebas en <AgregarCategoriaComp/>', () => {

    const inputValue = 'matrix';
    
    test(' Debe de cambiar el valor de la textbox', () => {
        
        render(<AgregarCategoria setCategorias={ () => {} }/>);
        const input = screen.getByRole('textbox');

        // Para disparar un evento y así darle un valor al inputValue usamos fireEvent
        fireEvent.input( input, {target: {value: 'matrix'}});

        expect(input.value).toBe(inputValue);
        // screen.debug();
    });

    test(' Debe de llamar a setCategorias si el input tiene un valor ', () => {
        const setCategorias = jest.fn(); // Creando una función con jest

        render(<AgregarCategoria setCategorias={ setCategorias }/>);

        const  input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, {target: {value: inputValue}}); // Dispara el evento de cambiar el valor del input.
        fireEvent.submit( form ); // Dispara el evento de submit del valor form.
        
        expect( input.value ).toBe(''); // Esto porque al actualizarse el form con el submit, vuelve a una cadena vacía

        expect(setCategorias).toHaveBeenCalled(); // Con esto nos aseguramos que la función esté siendo llamada
        // expect(setCategorias).toHaveBeenCalledTimes(2); Esto si queremos testear que la función fue llamada determinado número de veces
        
    });

    test('No debe de llamar al setCategorias si el input está vacío', () => {
        const setCategorias = jest.fn(); // Creando una función con jest

        render(<AgregarCategoria setCategorias={ setCategorias }/>);

        const form = screen.getByRole('form');

        fireEvent.submit( form ); // Dispara el evento de submit del valor form.

        expect(setCategorias).not.toHaveBeenCalled();
    });
});
