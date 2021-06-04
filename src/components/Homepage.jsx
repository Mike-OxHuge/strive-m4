import { Component } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Subheader from "./SubHeader";
import Carousel from "./homepage-components/Carousel";

class Homepage extends Component {
  state = {};
  render() {
    return (
      <>
        <Navbar />
        <Subheader />
        <Carousel title="some title" />
        <Carousel title="some title" />
        <Carousel title="some title" />
        <Footer />
      </>
    );
  }
}

export default Homepage;
