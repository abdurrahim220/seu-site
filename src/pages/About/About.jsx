import React from 'react'
import { Helmet } from 'react-helmet-async'
import PageTransition from '../../hooks/PageTransition'
import { useScroll, useSpring } from 'framer-motion'
import { motion } from 'framer-motion';
const About = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress)
  return (
    <PageTransition>

      <motion.div style={{ scaleX }} >
        <Helmet>
          <title>SEU || About</title>
        </Helmet>

        <div>
          <div className='mb-6'><div className="hero min-h-screen" style={{ backgroundImage: 'url(https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/308468636_507353204729951_4755873565459664359_n.png?stp=dst-png_s960x960&_nc_cat=109&cb=99be929b-59f725be&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeGsZ1AxvrfsSBmW8GOjsDAn74fj8u9z9nzvh-Py73P2fJdW_Mf1rSDb1ASPbBeCRNGfjBMHsEdrsow901ZYa7Zv&_nc_ohc=sqmnBUgpar4AX_YgmSy&_nc_ht=scontent.fdac24-4.fna&oh=00_AfCeswH2637ro748HnzhXWxVLf8Jq0ErDO_BjDDyql3EOw&oe=64CAB588)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                <p className="mb-5">History (Image and Details) of Club Alumnie</p>
              </div>
            </div>
          </div></div>

          <div>

          </div>
        </div>
      </motion.div>

    </PageTransition>

  )
}

export default About