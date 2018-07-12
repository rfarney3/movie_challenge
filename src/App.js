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
      movies: [],
      total_pages: null,
      page_num: 1,
      query: null
    };

  fetchMovies(search) {
    fetch(URL + `${API_KEY}` + language + query + search + "&page=" + `${this.state.page_num}`)
      .then(res => res.json())
      .then(json => this.setState({ movies: json.results }));
  }

  filterSearch = event => {
    let term = event.target.value;
    this.setState({
      query: term
    }, () => this.fetchMovies(this.state.query))
  };

  nextPage = () => {
    if(this.state.movies) {
      this.setState({
        page_num: this.state.page_num +=1
      }, () => this.fetchMovies(this.state.query))
    }
  }

  previousPage = () => {
    if(this.state.movies) {
      this.setState({
        page_num: this.state.page_num -=1
      }, () => this.fetchMovies(this.state.query))
    }
  }

  render() {
    return (
      <div>
        <div className="header">
          <img className="App-logo" alt="" width="60px" src={popcorn} />
          <h1 style={{display: "inline", paddingLeft: "1%"}}>Search Your Movies</h1>
        </div>
        <div>
          <input style={{ marginLeft: "2.4%", marginBottom: "1%"}} placeholder="Search by Title" onChange={this.filterSearch}/>
          <button onClick={this.previousPage}style={{marginLeft: "28%"}}>Previous Page</button>
          <button onClick={this.nextPage}style={{marginLeft: "0%"}}>Next Page >></button>
        </div>
        <div className="screen">
        {this.state.movies ? (this.state.movies.map(movie => <Movie key={movie.id} movie={movie} />)) : (null)}
        </div>
      </div>
    );
  }
}

export default App;
