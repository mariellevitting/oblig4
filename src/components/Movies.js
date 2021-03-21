import { useState } from 'react';
import getMovies from '../utils/movieService';
import Movie from './Movie';

const Movies = () => {
    const [filmer, setFilmer] = useState([]);
    
    const handleClick = async () => {
        const data = await getMovies();
        setFilmer(data);
        {console.log(data)}
    };

    return (
        <>
            {filmer?.length > 0 ? <p>{JSON.stringify(filmer)}</p> : null}
            {/* filmer.map(movie => <Movie title={movie.title} actor={movie.actor}) /> */}
            <button type="button" onClick={handleClick}>
                Hent filmer
            </button>
        </>
    );
};

export default Movies;
