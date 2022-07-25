import { render, screen } from "@testing-library/react";
import React from "react";
import { GifGridItemComp } from '../../src/components/GifGridItemComp';

describe('Pruebas en <GifGridItemComp />', () => {

    const title = "matrix";
    const url = "https://matrix.com/codigo.jpg";

    test('Debe de hacer match con el Snapshot ', () => {

        const {contenedor} = render(<GifGridItemComp title={title} url={url}/>);

        expect(contenedor).toMatchSnapshot();
    });

    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {

        render(<GifGridItemComp title={title} url={url}/>);
        //screen.debug(); //análogo a un console.log() pero para mostrarlo en tests.
        console.log( screen.findAllByRole('img'));
    })
});