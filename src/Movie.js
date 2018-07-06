import React, { Component } from "react";
const beginning = "https://image.tmdb.org/t/p/w185";

class Movie extends Component {
  render() {
    return (
      <table className="movie-list">
        <tr>
          <td>
            <img
              alt={this.props.movie.poster_path}
              width="90px"
              src={`${beginning}` + this.props.movie.poster_path}
            />
            <p>
              <strong>{this.props.movie.title}</strong>
            </p>
          </td>
        </tr>
        <p style={{ fontStyle: "italic" }}>{this.props.movie.overview}</p>
      </table>
    );
  }
}

export default Movie;
