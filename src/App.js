import React from 'react';
import { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Movies from './components/movies/Movies';
import Search from './components/search/Search';

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=7b9ce72f&s=${'star wars'}`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
      });
  }, []);

  const searchMovie = (str) => {
    fetch(`http://www.omdbapi.com/?apikey=7b9ce72f&s=${str}`)
      .then((response) => response.json())
      .then((data) => setMovies(data.Search));
  };

  return (
    <div className="page">
      <Header />
      <Search searchMovie={searchMovie} />
      <main className="main">
        {movies.length ? (
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
