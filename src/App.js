import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./components/Home";
import MovieDetails from "./components/MovieDetails";
import BrowseResult from "./components/BrowseResult";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/:movieID/" component={MovieDetails} />
          {/* <Route exact path="/browse/:genre" component={BrowseResult} /> */}
          <Route
            exact
            path="/browse/:genre"
            render={(routerProps) => <BrowseResult {...routerProps} />}
          />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
