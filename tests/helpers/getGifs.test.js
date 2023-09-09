import getGifs from '../../src/helpers/getGifs';

describe('Pruebas en getGifs()', () => {

    test('Retornar un arreglo de gifs', async () => {

        const gifs = await getGifs('FC Barcelona');
        
        expect( gifs.length ).toBeGreaterThan(0);

        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String )
        });

    });

});