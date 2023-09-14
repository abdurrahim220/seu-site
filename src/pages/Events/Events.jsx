import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import PageBanner from '../Shared/PageBanner/PageBanner'
import EventCard from './EventCard';
import PageTransition from '../../hooks/PageTransition';

const Events = () => {

  const [events, setEvents] = useState([]);
  const eventsimg = 'https://i.ibb.co/QXR1bkc/lee-blanchflower-1d-W1v-EJLl-CQ-unsplash.jpg'



  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then(res => res.json())
      .then(data => {
        setEvents(data)
       console.log(data)
      })
  }, []);


  return (
    <PageTransition>
    <div>
      <Helmet>
        <title>SEU || Events</title>
      </Helmet>

      <PageBanner img={eventsimg} title={"Seu Events"} description={"All Types of events are here"}/>


      <div className='py-10 bg-[#adb5bd]'>



        <div className='flex flex-col gap-3'>
          {
            events.slice(0,4).map((data) => {
              return <EventCard key={data._id} data={data} />

            })
          }
        </div>


      </div>

    </div>
    </PageTransition>
  )
}

export default Events