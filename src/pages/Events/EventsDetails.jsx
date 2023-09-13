import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async';
import { useLoaderData, useParams } from 'react-router-dom'
import PageBanner from '../Shared/PageBanner/PageBanner';

const EventsDetails = () => {
  const details = useLoaderData();
  // console.log(details);
  const { eventName, eventImage, eventDescription, speakers } = details;


  return (
    <div className='bg-[#ecf1f5]'>
      <Helmet>
        <title>event-Details</title>
      </Helmet>
      <PageBanner />
      <div className='container mt-10 bg-[#ecf1f5]  bg mx-auto grid justify-items-center'>
        <div>
          <img className='h-[400px] w-[800px]' src={eventImage} alt="" srcset="" />
        </div>
        <div className=''>
          <h1 className='text-[#131c33] text-5xl font-bold mt-14 mb-5'>{eventName}</h1>
          <p className='mb-7 leading-3 font-bold text-[#3a3b3c] text-3xl box-content h-[100px] w-[220]'>{eventDescription}</p>
          <p className='box-border text-center text-3xl mt-24 mb-16 bg-[#3b60c9] p-3 text-white font-bold'>Event Schedule</p>
         
         
          <div className='grid gap-3 mb-10'>
            <div className="collapse collapse-plus bg-[#fff]">
              <input type="radio" name="my-accordion-3" checked="checked" />
              <div className="collapse-title text-xl font-medium ">
                Click to open this one and close others
              </div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-[#fff]">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                Click to open this one and close others
              </div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}

export default EventsDetails