import React from 'react'
import PageBanner from '../Shared/PageBanner/PageBanner'
import { Helmet } from 'react-helmet-async'
import Lottie from "lottie-react";

import don_t_Animation from "../../assets/LottiAnimaton/animation_llslicsq.json";

import PageTransition from '../../hooks/PageTransition';

const Contact = () => {
    const cover = 'https://i.ibb.co/1LWMyKw/miles-burke-idhx-MOCDSk-unsplash.jpg'
    return (
        <PageTransition>
            <>
                <Helmet>
                    <title>SEU || contact</title>
                </Helmet>
                <div>
                    <PageBanner img={cover} title={"Feel Free To Contact Us"} description={"We Southeast University Club Provide The Best services"} />
                </div>

                <div className='lg:flex gap-4 justify-center mt-28 mb-24 items-center container mx-auto'>
                    <div>
                        <Lottie animationData={don_t_Animation} loop={true} />;
                    </div>

                    <div className="hero mx-auto lg:flex gap-5  items-center max-w-screen-lg bg-base-200 rounded-md">
                        <div className='px-10'>
                            <h1 className="text-2xl font-bold mb-3">SEND MESSAGE</h1>

                            <form onSubmit="">
                                <div className='flex flex-row gap-3'>
                                    <div className='flex flex-col'>
                                        <label className='text-[#000] font-semibold mb-2'>Name</label>
                                        <input type="text" placeholder="Your full name" className="px-[10px] py-[10px]" />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='text-[#000] font-semibold mb-2'>Email</label>
                                        <input type="email" placeholder="Your email" className="px-[10px] py-[10px]" />
                                    </div>
                                </div>

                                <div className='flex flex-col my-3'>
                                    <label className='text-[#000] font-semibold mb-2'>Subject</label>
                                    <input type="text" placeholder='Subject' className='px-[10px] py-[10px]' name="" id="" />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='text-[#000] font-semibold mb-2'>Message</label>
                                    <textarea placeholder="Message" className="h-[100px]" ></textarea>
                                </div>
                                <div className='flex my-4 gap-2'>
                                    <input type="checkbox" className='checkbox' name="" id="" />
                                    <label className='text-[#000] font-semibold mb-2'>Read Activities</label>
                                </div>

                                <input type="submit" className='bg-[#3b60c9] text-white py-3 px-10 text-2xl font-[400]' value="Send" />

                            </form>

                        </div>


                    </div>

                </div>
            </></PageTransition>
    )
}

export default Contact