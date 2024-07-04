import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import Slider from "react-slick";
import catalog_data from "../catalog_data";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    className: "carousel",
    autoplay: true,
    autoplaySpeed: 2000,
    dotsClass: `slick-dots `,
  };
  return (
    <div className="carousel__container">
      <Slider {...settings}>
        {catalog_data.map((item) => (
          <div key={item.img}>
            <img src={item.img} alt={item.name} />
            <div className="info">
              <p>{item.name}</p>
              <button>Узнать о наличии</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
