import React, { Component } from "react";
import Filter from "./Filter.js";
import Movie from "./Movie.js";

const URL = "https://api.themoviedb.org/3/search/movie?api_key=";
const API_KEY = process.env.REACT_APP_API_KEY;
const language = "&language=en-US";
const query = "&query=";

class Home extends Component {
  state = {
    movies: [],
    query: "%20"
  };

  componentDidMount() {
    this.fetchTitles();
  }

  fetchTitles() {
    fetch(URL + `${API_KEY}` + language + query + this.state.query)
      .then(res => res.json())
      .then(movies => this.setState({ movies }));
  }

  handleFilter = event => {
    this.setState(
      {
        query: event.target.value
      },
      () => {
        this.setState({
          movies: this.state.movies.results.filter(movie => {
            return movie.title.toLowerCase().includes(this.state.query);
          })
        });
        this.fetchTitles();
      }
    );
  };

  displayMovies() {
    if (this.state.movies.length > 0) {
      return this.state.movies.results.map(movie => {
        console.log("hey", movie.title);
      });
    }
  }

  render() {
    const { movies } = this.state;
    console.log("move", movies);
    console.log("query", this.state.query);
    // const fetchMovies =
    //   movies.length === 0 ? (
    //     <p>There are no movies to display</p>
    //   ) : (
    //     this.displayMovies()
    //   );
    return (
      <div id="home-page">
        <Filter handleFilter={this.handleFilter} query={this.state.query} />
        <br />
        <div className="ui vertically divided grid">
          <div className="two column row">
            {movies.length > 0 ? (
              movies.results.map(movie => <Movie title={movie.title} />)
            ) : (
              <p>null</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
