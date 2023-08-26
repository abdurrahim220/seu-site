import React, { useEffect } from 'react'
import { useState } from 'react'

import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import { FaDotCircle } from 'react-icons/fa';
import EventCard from '../../Events/EventCard';



const Banner = () => {

  const [events, setEvents] = useState([]);

  const [page, setPage] = useState(1);
  
  useEffect(() => {
    const limit = 1;
    fetch(`https://server2-abdurrahim220.vercel.app/events?limit=${limit}&page=${page}`)
      .then(res => res.json())
      .then(data => {
        setEvents(data)
        console.log(data)
      })

  }, []);

  const handleClickNext = () => {
    const limit = 1;

    setPage(page + 1);

    fetch(`https://server2-abdurrahim220.vercel.app/events?limit=${limit}&page=${page}`)
      .then(res => res.json())
      .then(data => {
        setEvents(data)
        console.log(data)
      })

  }

  const handleClickPrevious = () => {
    setPage(page - 1);
    fetch(`https://server2-abdurrahim220.vercel.app/events?limit=${limit}&page=${page}`)
      .then(res => res.json())
      .then(data => {
        setEvents(data)
        console.log(data)
      })
  }

  const slides = [
    { url: "https://i.ibb.co/frXH6DX/366357667-251573614429709-6683106828939593557-n.jpg" },
    { url: "https://i.ibb.co/d70x1Bd/366800092-251573847763019-5536209276254022446-n.jpg" },
    { url: "https://i.ibb.co/7GNw5CT/366800826-251573807763023-722381529471720335-n.jpg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => setCurrentIndex(currentIndex => currentIndex === 0 ? slides.length - 1 : currentIndex - 1);

  const next = () => setCurrentIndex((currentIndex) => (currentIndex === slides.length - 1 ? 0 : currentIndex + 1));

  const goToSlide = (slidesIndex) => {
    setCurrentIndex(slidesIndex)
  }

  return (
    <>
      <div className='max-w-screen-2xl h-[780px] w-full m-auto relative group'>
        <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className='w-full h-full bg-current bg-cover duration-500'>

        </div>
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <HiOutlineChevronLeft size={40} onClick={prev} />
        </div>
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>


          <HiOutlineChevronRight size={40} onClick={next} />
        </div>

        <div className='flex top-8 justify-center py-2'>
          {
            slides.map((slide, slideIndex) => {
              <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className='text-2xl cursor-pointer bg-black'>
                <FaDotCircle size={50} />
              </div>
            })}
        </div>

      </div>

      <div className='-mt-40 relative'>
        {
          events.map((data) => {
            return <EventCard key={data._id} data={data} />
          })
        }
        <div className='flex items-center justify-center -mt-7 mb-10'>
          <div className="btn-group ">
            <button className="btn btn-success" onClick={handleClickPrevious}
              disabled={page === 1}>«</button>

            <button className="btn ">{page}</button>
            <button className="btn btn-success" onClick={handleClickNext}
              disabled={page === `${events.length}`} >»</button>
          </div>
        </div>
        <h1>{events.length}</h1>
      </div>
    </>




  )
}

export default Banner