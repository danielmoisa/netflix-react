import React, { useState, useEffect} from 'react';
import axios from '../axios';
import './Row.css';
import { CarouselProvider, Slider, Slide, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Link } from 'react-router-dom';

const baseUrl = 'https://image.tmdb.org/t/p/original/'

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    return(
        <div className="row">
            <h2 className="row__title">{title}</h2>

            <CarouselProvider
                   visibleSlides={10}
                   totalSlides={22}
                   step={1}
                   naturalSlideHeight={isLargeRow ? 150 : 180}
                   naturalSlideWidth={isLargeRow ? 100 : 270}
            >
                <Slider className="row__posters">
                    {movies.map(movie => (
                        <Slide key={movie.id} className="row__poster" index={movie.id}>
                            <Link to={{pathname: `/title/${movie.id}`, state: { imgPath: movie.backdrop_path, movieTitle: movie?.title || movie?.name || movie?.original_name, movieDescription: movie.overview, date: movie.release_date, lang: movie.original_language}}}>
                                <Image src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                            </Link>
                        </Slide>
                    ))}
                </Slider>
            </CarouselProvider>
        </div>
    );
}

export default Row;