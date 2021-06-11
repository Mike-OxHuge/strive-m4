import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout";
import Homepage from "./components/Homepage";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/home/trending" component={Homepage} />
        </Layout>
      </Router>
    </>
  );
}

export default App;
