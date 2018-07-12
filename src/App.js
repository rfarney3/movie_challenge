import React, { Component } from "react";
import popcorn from "./popcorn.png";
import "./App.css";
import Movie from "./Movie.js";

const URL = "https://api.themoviedb.org/3/search/movie?api_key=";
const API_KEY = process.env.REACT_APP_API_KEY;
const language = "&language=en-US";
const query = "&query=";

class App extends Component {
  state = {
      movies: []
    };

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
                <img className="App-logo" alt="" width="60px" src={popcorn} />
              </td>
              <td>Search Your Movies</td>
            </tr>
          </tbody>
        </table>
        <input
          style={{ marginLeft: "2.4%", marginBottom: "1%"
          }}
          placeholder="Search by Title"
          onChange={this.filterSearch.bind(this)}
        />
        {/* this is undefined on "this.fetchMovies" so it binds the current app.js file to the value of "this" inside of the filterSearch function*/}
        {/* allows you to bind the this object inside of the functions scope so you can call the fetchMovies function without getting undefined because it still has context */}

        {this.state.movies ? (
          this.state.movies.map(movie => <Movie key={movie.id} movie={movie} />)
        ) : (
          null
        )}
      </div>
    );
  }
}

export default App;
