import React, { Component } from "react";
import logo from "./movie-logo.svg";
import "./App.css";
import Movie from "./Movie.js";

const URL = "https://api.themoviedb.org/3/search/movie?api_key=";
const API_KEY = process.env.REACT_APP_API_KEY;
const language = "&language=en-US";
const query = "&query=";

class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: []
    };
  }

  fetchMovies(search) {
    fetch(URL + `${API_KEY}` + language + query + search)
      .then(res => res.json())
      .then(json => this.setState({ movies: json.results }));
  }

  filterSearch = event => {
    let term = event.target.value;
    if (term !== null) {
      this.fetchMovies(term);
    }
  };

  render() {
    return (
      <div>
        <table className="header">
          <tbody>
            <tr>
              <td>
                <img alt="" width="50px" src={logo} />
              </td>
              <td className="title">Search Your Movies</td>
            </tr>
          </tbody>
        </table>
        <br />
        <input
          placeholder="Search by Title"
          onChange={this.filterSearch.bind(this)}
        />
        {this.state.movies ? (
          this.state.movies.map(movie => <Movie key={movie.id} movie={movie} />)
        ) : (
          <p>Must type in a movie </p>
        )}
      </div>
    );
  }
}

export default App;
