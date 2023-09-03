import { useEffect, useState } from 'react';
import getGifs from '../helpers/getGifs';

const useFetchGifs = (category) => {
    const [ gifs, setGifs ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    const getData = async () => {
        const data = await getGifs(category);
        setGifs(data);

        setIsLoading(false);
    };

    useEffect(() => {
        // getGifs(category)
        //     .then(data => setGifs(data));
        getData();
    }, []);

    return {
        gifs, 
        isLoading
    }
};

export default useFetchGifs;