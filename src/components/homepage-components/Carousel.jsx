import { Component } from "react";
class Carousel extends Component {
  state = {
    movies: [],
  };
  componentDidMount = async () => {
    let response = await fetch(
      `https://www.omdbapi.com/?apikey=2bc5c486&s=${this.props.searchQuery}`
    );
    let movies = await response.json();
    this.setState({
      movies: movies.Search,
    });
  };
  render() {
    return (
      <>
        <h1>{this.props.title}</h1>
        {this.state.movies.map((movie) => (
          <div key={movie.imdbID}>
            <span>{movie.Title}</span>
          </div>
        ))}
      </>
    );
  }
}

export default Carousel;
