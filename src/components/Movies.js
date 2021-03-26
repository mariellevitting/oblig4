import {useState} from 'react';
import {getMovies} from '../utils/movieService';
import Movie from './Movie';

const Movies = () => {
    const [filmer, setFilmer] = useState([]);
    
    const handleClick = async () => {
        const movie = await getMovies();
        setFilmer(movie);
        console.log(movie)
    };

    return (
        <>
            {filmer.map(movie => <Movie title={movie.title} actor={movie.actor} />)}
            <button type="button" onClick={handleClick}>Hent filmer</button>
        </>
    );
};

export default Movies;
