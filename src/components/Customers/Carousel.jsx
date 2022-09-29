import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import Groupon from "../../assets/groupon-white.png";
import Woop from "../../assets/woop-white.png";
import Quottes from "../../assets/double-quotes.png";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
  };
  return (
    <Slider {...settings}>
      <div className="slideCardOne">
        <div className="GrouponCard">
          <div className="otherBoxMore">
            <span>
              <img src={Quottes} alt="Quottes" />
              <img src={Groupon} alt="Groupon" />
            </span>
            <span>
              We found in Wazuh the most complete security plataform. We were
              seeking an open source SIEM solution that allowed scalability and
              integration with other tools, which made Wazuh the perfect fit. We
              achieved our goal, and in addition, we improved the visibility of
              our enviroment with the Wazuh monitoring options. <br />
              <br />
            </span>
            <span>Martin Petracca, IT Security Manager</span>
          </div>
        </div>
      </div>
      <div className="slideCardTwo">
        <div className="WoopCard">
          <div className="otherBoxMoreTwo">
            <span>
              <img src={Quottes} alt="Quottes" />
              <img src={Woop} alt="Woop" />
            </span>
            <span>
              In addition to the great advantage of being an open source
              plataform, Wazuh is also easy to deploy, and its multiple
              capabilities have allowed us to achieve our goal with security al
              Woop. Wazuh is a unique tool ans it's perfect for startups like
              Woop that are looking for top security at a competitive cost.{" "}
              <br />
              <br />
            </span>
            <span>Haithem Souala, Site Reliability Engineer</span>
          </div>
        </div>
      </div>
    </Slider>
  );
}
