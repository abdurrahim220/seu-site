import React from 'react'
import { Helmet } from 'react-helmet-async'
import EventsCard from '../EventsCard/EventsCard'
import Banner from '../Banner/Banner'
import Mission from '../Mission/Mission'
import Responsibility from '../Responsibility/Responsibility'
import MemberConuntUp from '../MemberConuntUp/MemberConuntUp'
import News from '../News/News'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>SEU || Home</title>
      </Helmet>
      <Mission/>
      <EventsCard></EventsCard>
      <Responsibility/>
      <MemberConuntUp/>
      <News></News>
    </div>
  )
}

export default Home