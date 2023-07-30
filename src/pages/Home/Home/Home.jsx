import React from 'react'
import { Helmet } from 'react-helmet-async'
import EventsCard from '../EventsCard/EventsCard'
import Banner from '../Banner/Banner'
import Mission from '../Mission/Mission'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>SEU || Home</title>
      </Helmet>
      <Mission/>
      <EventsCard></EventsCard>
    </div>
  )
}

export default Home