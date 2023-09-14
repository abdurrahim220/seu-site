import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async';
import { useLoaderData, useParams } from 'react-router-dom'
import PageBanner from '../Shared/PageBanner/PageBanner';
import According from '../Home/Mission/According';

const EventsDetails = () => {
  const details = useLoaderData();
  // console.log(details);

  const [open, setOpen] = useState(false);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null)
    }

    setOpen(index)

  }
  const { eventName, eventImage, eventDescription, speakers } = details;
  // const {speakers} = 
  console.log(speakers)



  return (
    <div className='bg-[#ecf1f5]'>
      <Helmet>
        <title>event-Details</title>
      </Helmet>
      <PageBanner />

      <section className=" bg-blueGray-200 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-1 shadow-lg rounded-lg">
                <div className="px-4 flex-auto">
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center mt-16">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-user-friends text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                {eventName}
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                {eventDescription}
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                The kit comes with three pre-built pages to help you get started
                faster. You can change the text and images and you're good to
                go. Just make sure you enable them first via JavaScript.
              </p>
              <a href="#" className="font-bold text-blueGray-700 mt-8">Check Notus JS!</a>
            </div>
            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words  w-full mb-2 shadow-lg rounded-lg bg-pink-500">
                <img alt="..." src={eventImage} className="w-full align-middle rounded-t-lg" />
                <blockquote className="relative p-8 mb-4">
                  <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" className="absolute left-0 w-full block h-95-px -top-94-px">
                    <polygon points="-30,95 583,95 583,65" className="text-pink-500 fill-current"></polygon>
                  </svg>

                  <h4 className="text-xl font-bold text-white">
                    Top Notch Services
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        <footer className="relative pt-8 pb-16 mt-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center md:justify-between justify-center">

              <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                <h1 className='py-10 text-2xl'>Some Query About Speakers</h1>
                {
                  speakers.map((data, index) => {
                    return <According key={index} open={index === open} title={data.speechTitle} desc={data.speechDescription} toggle={() => toggle(index)} />
                  })
                }
              </div>
            </div>
          </div>


        </footer>
      </section>

    </div>
  )
}

export default EventsDetails