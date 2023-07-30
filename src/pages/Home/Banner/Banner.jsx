import React, { useEffect, useState } from "react";



import img from "../../../assets/Roboto/1.jpg";
import img2 from "../../../assets/Roboto/2.jpg";
import img3 from "../../../assets/Roboto/3.jpg";
import img4 from "../../../assets/Roboto/4.jpg";

const Banner = () => {
  const [imgs, setImage] = useState([]);
  useEffect(() => {
    fetch("events.json")
      .then((res) => res.json())
      .then((data) => {
        setImage(data);
      });
  }, []);

  return (
    <>

      <div className="carousel w-full">
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img src="/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
          <div className="absolute flex justify-center top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
          <div className="absolute flex justify-center top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img src="/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
          <div className="absolute flex justify-center top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>

        {/* Slide 4 */}
        <div id="slide4" className="carousel-item relative w-full">
          <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
          <div className="absolute flex justify-center top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>

    </>
  );
};

export default Banner;
