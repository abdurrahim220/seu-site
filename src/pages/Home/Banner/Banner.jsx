import React, { useEffect } from 'react'


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Lottie from "lottie-react";
import { Parallax } from 'react-parallax';

const Banner = () => {

  const slides = [
    { url: "https://i.ibb.co/frXH6DX/366357667-251573614429709-6683106828939593557-n.jpg" },
    { url: "https://i.ibb.co/d70x1Bd/366800092-251573847763019-5536209276254022446-n.jpg" },
    { url: "https://i.ibb.co/7GNw5CT/366800826-251573807763023-722381529471720335-n.jpg" },
  ];

  return (

    <Carousel>
      {
        slides.map(slide => {
          return <div className=' lg:h-[800px]'>
            <img src={slide.url} />
          </div>
        })
      }

    </Carousel>

  )
}

export default Banner