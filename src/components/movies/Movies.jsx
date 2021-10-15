import Movie from '../movie/Movie';

const Movies = (props) => {
  const { movies } = props;
  return (
    <ul className="movies container">
      {movies.map((movie) => {
        return <Movie key={movie.imdbID} {...movie} />;
      })}
    </ul>
  );
};

export default Movies;
