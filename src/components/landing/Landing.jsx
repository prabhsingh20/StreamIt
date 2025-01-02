import LandingCard from "./LandingCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i className="fa fa-cheveron-right"></i>
      </button>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i className="fa fa-cheveron-left"></i>
      </button>
    </div>
  );
}

function Landing({ items }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <div className="homeContainer">
        <Slider {...settings}>
          {items.map((item) => (
            <LandingCard key={item.id} item={item} /> // Ensure you return the component
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Landing;
