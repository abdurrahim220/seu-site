import React from 'react'


import useGallery from '../../../hooks/useGallery';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import './styles.css';
// import required modules


const SliderGallery = () => {

    const [galleries] = useGallery();

    return (
        <div className=' bg-slate-300'>


            <div className="container mx-auto md:py-20 py-10 px-2">
                <div
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    className='flex justify-center font-bold font-roboto py-10 lg:text-5xl text-2xl'>
                    We Hold Our Memories
                </div>

                <div className='max-w-screen-lg lg:max-w-screen-xl mx-auto'
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                >
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper"
                    >
                        {
                            galleries.map(data => {
                                return <SwiperSlide>
                                    <img className='' src={data.image_url} alt="" srcset="" />
                                </SwiperSlide>
                            })
                        }
                    </Swiper>
                </div>
            </div> </div>
    )
}


export default SliderGallery