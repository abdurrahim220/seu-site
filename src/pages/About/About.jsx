import React from 'react'
import { Helmet } from 'react-helmet-async'
import PageTransition from '../../hooks/PageTransition'
import { useScroll, useSpring } from 'framer-motion'
import { motion } from 'framer-motion';
import PageBanner from '../Shared/PageBanner/PageBanner';
const About = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress)
  return (
    <PageTransition>
      <Helmet>
        <title>SEU || About</title>
      </Helmet>

      <PageBanner img="" title="About Us" description="Alumni Needs enables you to harness the power of your alumni network. Whatever may be the need" />

     

        <div className='relative w-[500px] mx-auto'>
          <div className='lg:-top-20 lg:text-[7.2rem] lg:text-[#fff] absolute right-7'>1920</div>

          <img className='float-left' src="https://codeboxr.net/themedemo/unialumni/html/assets/images/about-page/about-img-1.jpg" alt="" srcset="" />
          <h1>ESTD of This Alumni Assotitation</h1>
          <p>Aenean viverra rhoncus sspede. Phasellssus leo dolor, tempus non, auctor endrerit
            quis, nisi. Fusce neque. Donec vitae orci sed dolor rutrum ausssctor. Sed
            fringilla mauris sit amet nibh.</p>
          <p>Etiam rhoncus. Ut lddffdfqwqeo. Morbi mollis tellus ac sapien. Fusce fermentum oo
            nec arcu. Quisque manisl idUt leo. Morbi mollis tellus ac sapien. Fusce
            fermentum oo nec ante tempus hendrerit. Curabitur at lacus ac velit ornare
            lobortis. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In
            turpis. Quisque id mi.Aenean viverra rhoncus pede. Phasellus leo dolor, tempus non, auctor
            endrerit quis, nisi.
            Fusce neque. Donec vitae orci sed dolor rutrum auctor. Sed fringilla mauris sit amet
            nibh.Etiam rhoncus. Ut leo. Morbi mollis tellus ac sapien. Fusce fermentum oo nec arcu.
            Quisque malesuada placerat nisl. Etiam sit amet orci eget faucitincidunt. Quisque
            rutrum. Pellentesque posuere. Praesent ac massa at ligula laoureet iaculis. Cras risus
            ipsum, faucibus ut, ullamcorper id, varius ac, leo.</p>
        </div>


    </PageTransition>

  )
}

export default About