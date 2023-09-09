import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en <GifItem />', () => {
    
    const title = 'spider-man fighting gif';
    const url = 'https://gif.com/spider-man-fighting.jpg'

    test('Hacer match con el snapshot', () => {

        const { container } = render( <GifItem title={ title } url={ url } /> ); 
        expect( container ).toMatchSnapshot();

    });

    test('Mostrar la imágen con la URL y el ALT establecido', () => {
        
        render( <GifItem title={ title } url={ url } /> );
        // screen.debug();

        // expect( screen.getByRole('img').src ).toBe( url );
        // expect( screen.getByRole('img').alt ).toBe( title );

        const { src, alt } = screen.getByRole('img');

        expect( src ).toBe( url );
        expect( alt ).toBe( title );

    });

    test('Mostrar el título en el componente', () => {
        
        render( <GifItem title={ title } url={ url } /> );
        expect( screen.getByText( title ) ).toBeTruthy();

    });

});