import Carousel from "./Carousel";
import SubHeader from "./SubHeader";

const Homepage = () => {
  return (
    <div>
      <SubHeader />
      <Carousel title="Harry Potter" searchQuery="harry%20potter" />
      <Carousel title="Star Wars" searchQuery="star%20wars" />
      <Carousel title="LOTR" searchQuery="lord%20of%20the%20rings" />
    </div>
  );
};

export default Homepage;
