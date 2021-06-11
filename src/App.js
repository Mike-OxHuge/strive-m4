import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout";
import Homepage from "./components/Homepage";
import Explore from "./components/Explore";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Route exact path="/" component={Homepage} />
          <Route
            path="/home/:explore"
            render={(routerProps) => <Explore {...routerProps} />}
          />
        </Layout>
      </Router>
    </>
  );
}

export default App;
