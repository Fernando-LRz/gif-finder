import { fireEvent, render, screen } from '@testing-library/react';
import GifApp from '../src/GifApp';

describe('Pruebas en <GifApp />', () => {

    const title = 'GifApp';
    const category = 'JavaScript';

    test('Hacer match con el snapshot', () => {
        
        const { container } = render( <GifApp /> );
        expect( container ).toMatchSnapshot();
        
    });

    test('Mostrar el título en un h1', () => {

        render( <GifApp /> );

        const h1 = screen.getByRole('heading', { level: 1 });
        
        expect( h1.innerHTML ).toBe(title);
        // screen.debug();

    });

    test('Evitar la misma categoria múltiples veces', () => {

        render( <GifApp /> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: category } } );
        fireEvent.submit( form );

        fireEvent.input( input, { target: { value: category } } );
        fireEvent.submit( form );

        fireEvent.input( input, { target: { value: category } } );
        fireEvent.submit( form );

        expect( screen.getAllByRole('heading', { level: 3, value: category }).length ).toBe(1);

    });


});