import React from 'react';
import { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Movies from './components/movies/Movies';
import Search from './components/search/Search';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${'star wars'}`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
      });
  }, []);

  const searchMovie = (str) => {
    setLoading(true);
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}`)
      .then((response) => response.json())
      .then((data) => setMovies(data.Search));
    setLoading(false);
  };

  return (
    <div className="page">
      <Header />
      <Search searchMovie={searchMovie} />
      <main className="main">
        {!loading ? (
          <Movies movies={movies} />
        ) : (
          <p className="center">Loading...</p>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
