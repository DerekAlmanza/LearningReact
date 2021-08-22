import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import React from "react";
import {shallow} from 'enzyme';
import RetornarDefaultPropTypes from "../DefaultPropTypesComp";

describe('Pruebas de DefaultPropTypes.test.js', () => {
    
    // Primer test. Usando Testing library
    test('Usando Testing library, Debe de mostrar "Hola, soy Simón", viendo si está en el documento', () => {
        
        const saludo = 'Hola, soy Simón';

        // Crear constante del componente de React 
        const {getByText} = render(<RetornarDefaultPropTypes saludo={saludo}/>);

        // Comprobamos si el elemento HTML está en el documento.
        // Con este falla
        // expect(getByText(`${saludo} !!`)).toBeInTheDocument();
        // Con este está bien
        expect(getByText(saludo)).toBeInTheDocument();
    });

    // Segundo test. Usando Enzyme.
    test('Debe de mostrar <RetornarDefaultPropTypes/> correctamente', () => {
        
        const saludo = 'Hola, soy Simón';
        const elementoRenderizado = shallow(< RetornarDefaultPropTypes saludo={saludo}/>);

        expect(elementoRenderizado).toMatchSnapshot();
    });
});