import { renderHook, waitFor } from '@testing-library/react';
import useFetchGifs from '../../src/hooks/useFetchGifs';

describe('Pruebas en useFetchGifs', () => {

    const category = 'Xbox';

    test('Retornar el estado inicial', () => {

        const { result } = renderHook( () => useFetchGifs(category) );
        const { gifs, isLoading } = result.current;

        expect( gifs.length ).toBe(0);
        expect( isLoading ).toBeTruthy();

    });

    test('Retornar un arreglo de gifs y el isLoading en false', async () => {

        const { result } = renderHook( () => useFetchGifs(category) );

        await waitFor(
            () => expect( result.current.gifs.length ).toBeGreaterThan(0),
            // {
            //     timeout: 1000
            // }
        );

        const { gifs, isLoading } = result.current;

        expect( gifs.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();

    });

});