import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import PageBanner from '../Shared/PageBanner/PageBanner'
import EventCard from './EventCard';

const Events = () => {

  const [events, setEvents] = useState([]);



  useEffect(() => {
    fetch("https://server2-abdurrahim220.vercel.app/events")
      .then(res => res.json())
      .then(data => {
        setEvents(data)
       // console.log(data)
      })
  }, []);


  return (
    <div>
      <Helmet>
        <title>SEU || Events</title>
      </Helmet>

      <PageBanner />


      <div className='my-10'>



        <div className='flex flex-col gap-3'>
          {
            events.slice(0,4).map((data) => {
              return <EventCard key={data._id} data={data} />

            })
          }
        </div>


      </div>

    </div>
  )
}

export default Events