import React from "react";
const beginning = "https://image.tmdb.org/t/p/w185";

const Movie = (props) => (
  <div className="movie-list">
    <img alt={props.movie.poster_path} style={{ borderRadius: "10px" }} width="90px" src={`${beginning}` + props.movie.poster_path}/><br/>
    <span style={{ fontSize: "20px", textDecoration: "underline" }}><strong>{props.movie.title}</strong></span><br/>
    <strong>Released: </strong> {props.movie.release_date} <br />
    <strong>Popularity: </strong> {props.movie.popularity}
    <p style={{ fontStyle: "italic" }}>{props.movie.overview}</p>
  </div>
);

export default Movie;
