import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="main">
        <Welcome />
      </div>
      <Footer />
    </div>
  );
}

export default App;
