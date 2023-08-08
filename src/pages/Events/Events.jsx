import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import PageBanner from '../Shared/PageBanner/PageBanner'
import EventCard from './EventCard';

const Events = () => {

  const [events, setEvents] = useState([]);


  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then(res => res.json())
      .then(data => {
        setEvents(data)
      })
  }, []);

  return (
    <div>
      <Helmet>
        <title>SEU || Events</title>
      </Helmet>

      <PageBanner />


      <div className='my-10'>



        <div className='flex flex-col'>
          {
            events.map((data) => {
              return <EventCard key={data.id} data={data} />

            })
          }
        </div>


      </div>

    </div>
  )
}

export default Events