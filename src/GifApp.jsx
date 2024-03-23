import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

const GifApp = () => {

    const [ categories, setCategories ] = useState([]);

    const onAddCategory = (newCategory) => {
        if( categories.includes( newCategory ) ) return;

        // setCategories(category => [ ...category, 'D' ]);
        setCategories([ ...categories, newCategory ]);
    }; 

    return (
        <>
            <h1>GIF finder</h1>

            <AddCategory 
                // setCategories={ setCategories }
                // onNewCategory={ (value) => onAddCategory(value) }
                onNewCategory={ onAddCategory }
            />

            {
                categories.map(( category ) => (
                    <GifGrid key={ category } category={ category }/>
                ))
            }

        </>
    );
};

export default GifApp;