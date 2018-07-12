import React from "react";
const beginning = "https://image.tmdb.org/t/p/w185";

const Movie = (props) => (
  <div className="movie-list">
    <img alt={props.movie.poster_path} width="90px" src={`${beginning}` + props.movie.poster_path}/><br/>
    <span style={{ fontSize: "20px" }}><strong>{props.movie.title}</strong></span><br/>
    <strong>Released: </strong> {props.movie.release_date} <br />
    <strong>Popularity: </strong> {props.movie.popularity}
    <p style={{ fontStyle: "italic" }}>{props.movie.overview}</p><br/>
  </div>
);

export default Movie;
