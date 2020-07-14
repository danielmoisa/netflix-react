import React from 'react';
import '../App.css';
import Row from './Row';
import api from '../api';
import Banner from './Banner';
import Nav from './Navbar';

function Home() {
    return(
        <div className="app">
            <Nav />
            <Banner />
            <Row title="Netflix Originals" fetchUrl={api.fetchNetflixOriginals} isLargeRow />
            <Row title="Trending" fetchUrl={api.fetchTrending} />
            <Row title="Top Rated" fetchUrl={api.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={api.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={api.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={api.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchUrl={api.fetchRomanceMovies} />
            <Row title="Documentaries" fetchUrl={api.fetchDocumentaries} />
        </div>
    )
}

export default Home;