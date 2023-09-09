import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en <AddCategory />', () => { 

    const category = 'Champions League';
    
    test('Cambiar el valor de la caja de texto', () => {

        render( <AddCategory onNewCategory={ () => {} }/> );
        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: { value: category } } );

        expect( input.value ).toBe( category );
        // screen.debug();

    });

    test('Llamar onNewCategory si el input no está vacio', () => {
        
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory }/> );
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: category } } );
        fireEvent.submit( form );

        expect( input.value ).toBe('');

        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( category );
        // screen.debug();

    });

    test('No llamar onNewCategory si el input está vacio', () => {
        
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory }/> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        fireEvent.input( input, { target: { value: '' } } );
        fireEvent.submit( form );

        // expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();
        // screen.debug();

    });

});