import { render, screen } from '@testing-library/react';

import { GifGrid } from '../../src/components/GifGrid';
import useFetchGifs from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {

    const category = 'Tesla';

    test('Mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            gifs: [],
            isLoading: true
        });

        render( <GifGrid category={ category }/> );

        expect( screen.getByText('Cargando...') );
        expect( screen.getByText(category.toLowerCase()) );
        // screen.debug();

    });

    test('Mostrar GifItems cuando se cargan las imágenes del useFetchGifs', () => {
        
        const gifs = [
            {
                id: 'abc',
                title: 'Tesla Model X',
                url: 'https://tesla.com/model-x.jpg'
            },
            {
                id: '123',
                title: 'Tesla Roadster',
                url: 'https://tesla.com/roadster.jpg'
            }
        ];
        
        useFetchGifs.mockReturnValue({
            gifs,
            isLoading: false
        });

        render( <GifGrid category={ category }/> );

        expect( screen.getAllByRole('img').length ).toBe(2);
        // screen.debug()
    
    });

});