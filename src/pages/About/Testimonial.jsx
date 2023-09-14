import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';


const Testimonial = () => {


  const reviews = [
    {
      "name": "John Doe",
      "image": "https://codeboxr.net/themedemo/unialumni/html/assets/images/committee/commitee-1.jpg",
      "role": "Computer Science Student",
      "comment": "I had a wonderful experience at Greenwood University. The professors were knowledgeable, and the campus was beautiful."
    },
    {
      "name": "Jane Smith",
      "image": "https://codeboxr.net/themedemo/unialumni/html/assets/images/committee/commitee-1.jpg",
      "role": "Business Administration Student",
      "comment": "Greenwood University provided me with an excellent education. The career services helped me secure a great job after graduation."
    },
    {

      "name": "Robert Johnson",
      "image": "https://codeboxr.net/themedemo/unialumni/html/assets/images/committee/commitee-1.jpg",
      "role": "Liberal Arts Student",
      "comment": "I enjoyed my time at Greenwood University. The library resources were extensive, and I made lifelong friends."
    },
    {
      "name": "Emily Williams",
      "image": "https://codeboxr.net/themedemo/unialumni/html/assets/images/committee/commitee-1.jpg",
      "role": "Engineering Student",
      "comment": "Greenwood University offered a challenging engineering program. I learned a lot and am grateful for the opportunities it provided."
    }
    ,
    {
      "name": "Emily Williams",
      "image": "https://codeboxr.net/themedemo/unialumni/html/assets/images/committee/commitee-1.jpg",
      "role": "Engineering Student",
      "comment": "Greenwood University offered a challenging engineering program. I learned a lot and am grateful for the opportunities it provided."
    }
    ,
    {
      "name": "Emily Williams",
      "image": "https://codeboxr.net/themedemo/unialumni/html/assets/images/committee/commitee-1.jpg",
      "role": "Engineering Student",
      "comment": "Greenwood University offered a challenging engineering program. I learned a lot and am grateful for the opportunities it provided."
    }
  ]


  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
      {reviews.map(data => {
        return <SwiperSlide>
         <div className="gird grid-cols-1 md:grid-cols-3">
          <div className="card mx-auto bg-white  shadow-xl hover:shadow">
            <img className="w-5 mx-auto rounded-full -mt-20 border-8 border-white" src={data.image} alt="" />
            <div className="text-center mt-2 text-3xl font-medium">{data.name}</div>
            <div className="text-center mt-2 font-light text-sm">@devpenzil</div>
            <div className="text-center font-normal text-lg">{data.role}</div>
            <div className="px-6 text-center mt-2 font-light text-sm">
              <p>
               {data.comment}
              </p>
            </div>
          </div>
        </div>
        </SwiperSlide>
      })}
       </Swiper>

    </>
  );
}

export default Testimonial