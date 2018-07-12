import React from "react";
const beginning = "https://image.tmdb.org/t/p/w185";

const Movie = (props) => (
      <div className="movie-list">
        <table>
          <tbody>
          <tr>
            <td>
              <img
                alt={props.movie.poster_path}
                width="90px"
                src={`${beginning}` + props.movie.poster_path}
              />
              <p style={{ fontSize: "20px" }}>{props.movie.title}</p>
              <strong>Released: </strong>
              {props.movie.release_date}
              <br />
              <strong>Popularity: </strong>
              {props.movie.popularity}
            </td>
          </tr>
          </tbody>
        </table>
        <p style={{ fontStyle: "italic" }}>{props.movie.overview}</p>
      </div>
    );

export default Movie;
