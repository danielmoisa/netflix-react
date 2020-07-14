import React from 'react';
import Nav from './Navbar';
import './SingleMovie.css';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function SingleMovie(props) {
    const[trailerUrl, setTrailerUrl] = React.useState('');

    React.useEffect(() => {
        movieTrailer(props.location.state.movieTitle || '')
        .then(url => {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
        }).catch(error => console.log(error));
    }, [])

    return(
        <div className="movie">
            <Nav />
            <header className="banner" style={{ backgroundSize: 'cover', backgroundImage: `url(https://image.tmdb.org/t/p/original/${props.location.state.imgPath})`, backgroundPosition: 'top center', height: '80vh', position: 'relative' }}>
                <div className="banner__contents" style={{fontSize: 30, paddingLeft: 100, maxWidth: 700}}>
                    <h1>{props.location.state.movieTitle}</h1>
                    <div className="banner__buttons">
                        <button className="banner__button">Play</button>
                        <button className="banner__button">My List</button>
                    </div>
                    <h1 className="banner__description" style={{maxWidth: 600, fontSize: 16, fontWeight: 400, height: 100, marginTop: 20}}>
                        {props.location.state.movieDescription}
                    </h1>
                    <p style={{color: '#a3a3a3', fontSize: 14, fontWeight: 400, marginTop: 80}}>
                        {props.location.state.date} {props.location.state.lang.toUpperCase()}
                    </p>
                </div>
                <div style={{height: '28rem'}} className="banner--fadeBottom"></div>
            </header>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 50}}>
                <Youtube videoId={trailerUrl} opts={{height: 600, width: 1200, playerVars: {controls: 0, modestbranding: 1, showinfo: 0}}} />
            </div>
        </div>
    );
}

export default SingleMovie;