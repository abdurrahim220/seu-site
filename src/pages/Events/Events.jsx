import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import PageBanner from '../Shared/PageBanner/PageBanner'
import EventCard from './EventCard';

const Events = () => {

  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("data.json")
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

      <p>data : {events.length}</p>

      {events.map((event) => {
        <li>{event.title}</li>
      })}




      <div className='my-10'>



        <div className='flex flex-col'>
          {
            events.map((data) => {
              <EventCard key={data.id} event={data} />

            })
          }
        </div>


      </div>

    </div>
  )
}

export default Events