import { render, screen } from "@testing-library/react";
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
        //expect( screen.getByRole('img').src).toBe(url); // Obtiene el src y el alt de la imagen y comprueba si es el mismo
        //expect( screen.getByRole('img').alt).toBe(title);

        // La mejor manera de hacerlo
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    })

    test('Debe de mostrar el título del Gif en el componente', () => {

        render(<GifGridItemComp title={title} url={url} />);

        expect(screen.getByText(title)).toBeTruthy();
    })

});