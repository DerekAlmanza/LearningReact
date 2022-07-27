import {fireEvent, render, screen} from '@testing-library/react';
import { AgregarCategoria } from '../../src/components/AgregarCategoriaComp';

describe('Pruebas en <AgregarCategoriaComp/>', () => {

    const value = 'matrix';
    
    test(' Debe de cambiar el valor de la textbox', () => {
        
        render(<AgregarCategoria setCategorias={ () => {} }/>);
        const input = screen.getByRole('textbox');

        // Para disparar un evento y así darle un valor al inputValue usamos fireEvent
        fireEvent.input( input, {target: {value: 'matrix'}});

        expect(input.value).toBe(value);
        // screen.debug();
    });
});