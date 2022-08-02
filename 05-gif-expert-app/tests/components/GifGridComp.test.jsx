import { render, screen } from "@testing-library/react";
import { GifGridComp } from "../../src/components/GifGridComp";

describe('Pruebas en < Pruebas en GifGridComp />', () => {

    const inputValue = "matrix";
    
    test('Debe de mostrar el loading y el nombre de la categoría en un inicio ', () => {
        
        render(<GifGridComp categoria={inputValue} />);
        expect( screen.getByText('Loading'));
        expect( screen.getByText("MATRIX"));
    });
    
});