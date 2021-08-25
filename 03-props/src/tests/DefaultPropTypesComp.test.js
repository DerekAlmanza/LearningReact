import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import React from "react";
import {shallow} from 'enzyme';
import RetornarDefaultPropTypes from "../DefaultPropTypesComp";

describe('Pruebas de DefaultPropTypes.test.js', () => {
    
    // Primer test. Usando Testing library. Probando el título-saludo.
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

    // Segundo test. Usando Enzyme. Probando el título-saludo.
    test('Debe de mostrar <RetornarDefaultPropTypes/> correctamente', () => {
        
        const saludo = 'Hola, soy Simón';
        const componenteRenderizado = shallow(< RetornarDefaultPropTypes saludo={saludo}/>);

        expect(componenteRenderizado).toMatchSnapshot();
    });

    // Tercer test. probando el subtítulo.
    test('Debe de mostrar el subtítulo enviado por props.', () => {
        
        const saludo = 'Hola, soy Simón';
        const subtitulo = 'Este es un subtítulo generado por defecto con defaultProps';
        const componenteRenderizado = shallow(< RetornarDefaultPropTypes saludo={saludo} subtitulo={subtitulo}/>);

        // Buscará en el html aquel elemento con h3. Si hubiera varios h3, usaríamos un array.
        const textoSubtitulo = componenteRenderizado.find('h3').text(); // .text regresa el string del comp. renderizado.
        console.log(textoSubtitulo);
        expect( textoSubtitulo ).toBe( subtitulo );

    });
});