import { Carousel } from "react-responsive-carousel";
import sliderImage_1 from "../images/slider/sliderImg_1.jpg";
import sliderImage_2 from "../images/slider/sliderImg_2.jpg";
import sliderImage_3 from "../images/slider/sliderImg_3.jpg";
import Image from "next/image";

function Banner() {
  return (
    <div className="relative">
      {" "}
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        <div>
          <Image src={sliderImage_1} alt="banner_img" />
        </div>
        <div>
          <Image src={sliderImage_2} alt="banner_img" />
        </div>
        <div>
          <Image src={sliderImage_3} alt="banner_img" />
        </div>
      </Carousel>
      <div className="w-full h-20 bg-gradient-to-t from-gray-100 to-transparent absolute bottom-0 z-20"></div>
    </div>
  );
}

export default Banner;
