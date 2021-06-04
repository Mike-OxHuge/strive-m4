import { Component } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Subheader from "./SubHeader";
import Carousel from "./homepage-components/Carousel";
import SearchBar from "./SearchBar";

class Homepage extends Component {
  state = {};
  render() {
    return (
      <>
        <Navbar />
        <Subheader />
        <SearchBar />
        <Carousel title="Harry Potter" searchQuery="harry%20potter" />
        <Carousel title="Star Wars" searchQuery="star%20wars" />
        <Carousel title="LOTR" searchQuery="lord%20of%20the%20rings" />
        <Footer />
      </>
    );
  }
}

export default Homepage;
