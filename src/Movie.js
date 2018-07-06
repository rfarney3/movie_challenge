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
            <p style={{ fontSize: "24px" }}>{this.props.movie.title}</p>
            <strong>Released: </strong>
            {this.props.movie.release_date}
            <br />
            <strong>Popularity: </strong>
            {this.props.movie.popularity}
          </td>
        </tr>
        <p style={{ fontStyle: "italic" }}>{this.props.movie.overview}</p>
      </table>
    );
  }
}

export default Movie;
