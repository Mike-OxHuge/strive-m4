import { Component } from "react";
import Comments from "./Comments";
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
            <Comments id={movie.imdbID} />
          </div>
        ))}
      </>
    );
  }
}

export default Carousel;

// an example of object.Search
// {
//      "Title":"Harry Potter and the Deathly Hallows: Part 2",
//      "Year":"2011","imdbID":"tt1201607",
//      "Type":"movie",
//      "Poster":"https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
// }
