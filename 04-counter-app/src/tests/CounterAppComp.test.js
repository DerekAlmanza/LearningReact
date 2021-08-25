import '@testing-library/jest-dom';
import React from "react";
import {shallow} from 'enzyme';
import CounterApp from '../CounterAppComp';

describe('Pruebas de la app CounterApp', () => {
    
    let componenteRenderizado = shallow(<CounterApp/>);

    // Se va inicializar antes de todo.
    beforeEach(() => {
        componenteRenderizado = shallow(<CounterApp/>);
    })

    // Primer test. 
    test('Debe de mostrar <CounterApp /> correctamente por medio de snapshot.', () => {
        
        expect( componenteRenderizado ).toMatchSnapshot();

    });

    // Segundo test.
    test('Debe de mostrar el valor por defecto de 100. ', () => {
        
        const componenteRenderizado = shallow(<CounterApp value={100}/>);

        const nuevoValor = componenteRenderizado.find('h2').text();

        expect( nuevoValor ).toBe( '100' );
    });

    // Tercer test.
    test('Debe de decrementar el contador con boton -1', () => {
        
        componenteRenderizado.find('button').at(0).simulate('click');
        const valorMenos = componenteRenderizado.find('h2').text().trim(); // trim elimina espacios en blanco

        expect( valorMenos ).toBe( '-1' );

    });

    // Cuarto test.
    test('Debe de incrementar el contador con boton +1', () => {
        
        componenteRenderizado.find('button').at(2).simulate('click');
        const valorMas = componenteRenderizado.find('h2').text().trim(); // trim elimina espacios en blanco

        expect( valorMas ).toBe( '1' );

    });

    // Cuarto test.
    test('Debe de resetear el contador con boton reset', () => {
        
        // Disminuye 1 
        componenteRenderizado.find('button').at(0).simulate('click');
        // Resetea
        componenteRenderizado.find('button').at(1).simulate('click');
        const valorReset = componenteRenderizado.find('h2').text().trim(); // trim elimina espacios en blanco

        expect( valorReset ).toBe( '0' );

    });
});