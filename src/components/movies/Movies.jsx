import Movie from '../movie/Movie';

const Movies = (props) => {
  const { movies = [] } = props;
  return (
    <ul className="movies container">
      {movies.length ? (
        movies.map((movie) => {
          return <Movie key={movie.imdbID} {...movie} />;
        })
      ) : (
        <p className="center">No results</p>
      )}
    </ul>
  );
};

export default Movies;
