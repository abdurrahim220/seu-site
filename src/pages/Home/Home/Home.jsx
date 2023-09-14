import React from 'react'
import { Helmet } from 'react-helmet-async'
import EventsCard from '../EventsCard/EventsCard'

import Mission from '../Mission/Mission'
import Responsibility from '../Responsibility/Responsibility'
import MemberConuntUp from '../MemberConuntUp/MemberConuntUp'
import News from '../News/News'
import Banner from '../Banner/Banner'
import Job from '../Job/Job'
import SliderGallery from '../SliderGallery/SliderGallery'


const Home = () => {
  return (
    <div className='font-serif'>
      <Helmet>
        <title>SEU || Home</title>
      </Helmet>
      <Banner />

      <Mission></Mission>
      <Responsibility />
      <MemberConuntUp />
      <Job />
      <SliderGallery />
      <News></News>

    </div>
  )
}

export default Home