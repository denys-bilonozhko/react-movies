import React from 'react';

const Movie = (props) => {
  const { Title: title, Year: year, Type: type, Poster: poster } = props;
  return (
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img src={poster} alt={title} />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {title}
        </span>
        <div>
          <span>{year}</span>
          <span className="right">{type}</span>
        </div>
      </div>
    </div>
  );
};

export default Movie;
