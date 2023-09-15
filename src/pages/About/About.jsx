import React from 'react'
import { Helmet } from 'react-helmet-async'
import PageTransition from '../../hooks/PageTransition'

import PageBanner from '../Shared/PageBanner/PageBanner';
import MemberConuntUp from '../Home/MemberConuntUp/MemberConuntUp';
import Testimonial from './Testimonial';
const About = () => {


  const committeeMembers = [
    {
      "name": "John Doe",
      "image": "https://codeboxr.net/themedemo/unialumni/html/assets/images/committee/commitee-1.jpg",
      "role": "President"
    },
    {
      "name": "Jane Smith",
      "image": "https://codeboxr.net/themedemo/unialumni/html/assets/images/committee/commitee-2.jpg",
      "role": "Vice President"
    },
    {
      "name": "David Johnson",
      "image": "https://codeboxr.net/themedemo/unialumni/html/assets/images/committee/commitee-3.jpg",
      "role": "Treasurer"
    },
    {
      "name": "Sarah Williams",
      "image": "https://codeboxr.net/themedemo/unialumni/html/assets/images/committee/commitee-4.jpg",
      "role": "Secretary"
    },
    {
      "name": "Michael Brown",
      "image": "https://codeboxr.net/themedemo/unialumni/html/assets/images/committee/commitee-5.jpg",
      "role": "Asst Secretary"
    },
    {
      "name": "Emily Davis",
      "image": "https://codeboxr.net/themedemo/unialumni/html/assets/images/committee/commitee-6.jpg",
      "role": "Office Secretary"
    },
    {
      "name": "Daniel Lee",
      "image": "https://codeboxr.net/themedemo/unialumni/html/assets/images/committee/commitee-7.jpg",
      "role": "Finance Member"
    },
    {
      "name": "Olivia Wilson",
      "image": "https://codeboxr.net/themedemo/unialumni/html/assets/images/committee/commitee-8.jpg",
      "role": "Committee Member"
    }
  ]



  return (
    <PageTransition>

      <Helmet>
        <title>SEU || About</title>
      </Helmet>

      <div className='bg-[#ecf1f5]'>
        <PageBanner img="" title="About Us" description="Alumni Needs enables you to harness the power of your alumni network. Whatever may be the need" />



        <div className='lg:pt-[176px] pb-16 py-16'>
          <div className='max-w-screen-lg	 px-2 bg-white relative font-poppins mx-auto py-10'>
            <div className='lg:-top-24 -top-12 lg:text-[7.2rem]  text-[3.6rem] text-rose-200	absolute lg:right-7'
              data-aos="fade-down"
            >2023</div>

            <img data-aos="fade-right" className='lg:float-left lg:w-[400px] lg:mr-4 lg:-ml-24 lg:-mt-24' src="https://codeboxr.net/themedemo/unialumni/html/assets/images/about-page/about-img-1.jpg" alt="" srcset="" />

            <h1 className='font-bold text-2xl py-1 lg:text-[2.6rem] lg:py-5'>Our New Genaretion</h1>
            <p className='clear-none  whitespace-normal lg:text-[16px] py-1'
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"

            >Aenean viverra rhoncus sspede. Phasellssus leo dolor, tempus non, auctor endreritquis, nisi. Fusce neque. Donec vitae orci sed dolor rutrum ausssctor. Sedfringilla mauris sit amet nibh.</p>

            <p className="lg:px-5 clear-none whitespace-normal lg:text-[16px] py-1"
              data-aos="zoom-out-right"
              data-aos-offset="0"

            >Etiam rhoncus. Ut lddffdfqwqeo. Morbi mollis tellus ac sapien. Fusce fermentum oonec arcu. Quisque manisl idUt leo. Morbi mollis tellus ac sapien. Fusce fermentum oo nec ante tempus hendrerit. Curabitur at lacus ac velit ornare lobortis. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In
              turpis. Quisque id mi.Aenean viverra rhoncus pede. Phasellus leo dolor, tempus non, auctor endrerit quis, nisi.
              Fusce neque. Donec vitae orci sed dolor rutrum auctor. Sed fringilla mauris sit amet
              nibh.Etiam rhoncus. Ut leo. Morbi mollis tellus ac sapien. Fusce fermentum oo nec arcu.
              Quisque malesuada placerat nisl. Etiam sit amet orci eget faucitincidunt. Quisque
              rutrum. Pellentesque posuere. Praesent ac massa at ligula laoureet iaculis. Cras risus
              ipsum, faucibus ut, ullamcorper id, varius ac, leo.</p>
          </div>
        </div>

        <div className='lg:py-[70px] py-11'>
          <div className='max-w-screen-lg	px-2 bg-white relative font-poppins mx-auto py-10'>
            <div className='lg:-top-24 -top-12 lg:text-[7.2rem]  text-[3.6rem] text-rose-200	 absolute lg:left-7'>1920</div>

            <img className='lg:float-right lg:w-[400px] lg:ml-4 lg:-mr-24 lg:-mt-24' src="https://codeboxr.net/themedemo/unialumni/html/assets/images/about-page/about-img-2.jpg" alt="" srcset="" />

            <h1 className='font-bold lg:text-[2.6rem] text-2xl pl-5 py-5'>Our First Achivement in History</h1>
            <p className='clear-none whitespace-normal text-[16px] pl-5 py-1'>Aenean viverra rhoncus sspede. Phasellssus leo dolor, tempus non, auctor endrerit
              quis, nisi. Fusce neque. Donec vitae orci sed dolor rutrum ausssctor. Sed
              fringilla mauris sit amet nibh.</p>
            <p className="px-5 clear-none whitespace-normal text-[16px] py-1" >Etiam rhoncus. Ut lddffdfqwqeo. Morbi mollis tellus ac sapien. Fusce fermentum oo
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
        </div>

        <div className='lg:py-[70px] py-11'>
          <div className='max-w-screen-lg	 px-2 bg-white relative font-poppins mx-auto py-10'>
            <div className='lg:-top-24 -top-12 lg:text-[7.2rem]  text-[3.6rem] text-rose-200	 absolute lg:right-7'>2023</div>

            <img  className='lg:float-left lg:w-[400px] lg:mr-4 lg:-ml-24 lg:-mt-24' src="https://codeboxr.net/themedemo/unialumni/html/assets/images/about-page/about-img-3.jpg" alt="" srcset="" />

            <h1 className='font-bold text-2xl py-1 lg:text-[2.6rem] px-5 lg:py-5'>Our New Genaretion</h1>
            <p  className='clear-none  whitespace-normal px-5 text-[16px] py-1'>Aenean viverra rhoncus sspede. Phasellssus leo dolor, tempus non, auctor endreritquis, nisi. Fusce neque. Donec vitae orci sed dolor rutrum ausssctor. Sedfringilla mauris sit amet nibh.</p>

            <p 
              className="px-5 clear-none whitespace-normal text-[16px] py-1" >Etiam rhoncus. Ut lddffdfqwqeo. Morbi mollis tellus ac sapien. Fusce fermentum oonec arcu. Quisque manisl idUt leo. Morbi mollis tellus ac sapien. Fusce fermentum oo nec ante tempus hendrerit. Curabitur at lacus ac velit ornare lobortis. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In
              turpis. Quisque id mi.Aenean viverra rhoncus pede. Phasellus leo dolor, tempus non, auctor endrerit quis, nisi.
              Fusce neque. Donec vitae orci sed dolor rutrum auctor. Sed fringilla mauris sit amet
              nibh.Etiam rhoncus. Ut leo. Morbi mollis tellus ac sapien. Fusce fermentum oo nec arcu.
              Quisque malesuada placerat nisl. Etiam sit amet orci eget faucitincidunt. Quisque
              rutrum. Pellentesque posuere. Praesent ac massa at ligula laoureet iaculis. Cras risus
              ipsum, faucibus ut, ullamcorper id, varius ac, leo.</p>
          </div>
        </div>
      </div>

      <MemberConuntUp />

      <div className='lg:py-44'>

        <h1 className='text-5xl text-center font-roboto font-bold'>Our Honorable Committe</h1>
        <div className='grid col-span-1 gap-5 md:grid-cols-4 max-w-5xl mx-auto pt-12'>
          {
            committeeMembers.map(data => {
              return <div className="flex w-64 h-96 flex-col justify-center items-center max-w-sm mx-auto rounded-lg shadow-lg overflow-hidden transition-transform transform hover:-translate-y-1 ease-in-out duration-400 m-4">
                <div style={{ backgroundImage: `url(${data.image})` }}
                  className="bg-gray-300 w-full h-96 rounded-lg shadow-md bg-cover bg-center"></div>
                <div className="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
                  <div className="py-2 text-center font-bold uppercase tracking-wide text-gray-800">
                    <h1 className=''>{data.name}</h1>
                    <h1 className="text-center text-stone-300">{data.role}</h1></div>
                </div>
              </div>
            })
          }
        </div>

      </div>

      {/* <div className='py-14'>
        <h1 className='lg:text-5xl text-2xl text-center  py-6'>Some Speech About Us</h1>
        <div className='max-w-5xl mx-auto'>
          <Testimonial />
        </div>
      </div> */}





    </PageTransition>

  )
}

export default About