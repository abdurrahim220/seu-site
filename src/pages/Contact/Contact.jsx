import React from 'react'
import PageBanner from '../Shared/PageBanner/PageBanner'
import { Helmet } from 'react-helmet-async'

const Contact = () => {
    return (
        <>
        <Helmet>
            <title>SEU || contact</title>
        </Helmet>
            <PageBanner />
            <div className='my-10'>
                <div className="hero mx-auto flex max-w-screen-lg bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src="https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/351755008_6292899310802063_337581231130957764_n.jpg?_nc_cat=101&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEB8jZa2i0fc8WJFIl-1YljyRwm2R7YiOfJHCbZHtiI58QBgA0M2VALiUnTE58FqP0_0-XCsR7nIaNAE71qfsPX&_nc_ohc=JPFUvXkSaY0AX9ezygo&_nc_ht=scontent.fdac24-4.fna&oh=00_AfB1Pardc64B1MAKUHt037NTNfoP6utCAZ47gQlDrj4vjw&oe=64CC6532" className="max-w-sm rounded-lg shadow-2xl" />
                    </div>


                    <div className=''>
                        <h1 className="text-2xl font-bold">SEND MESSAGE</h1>

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
        </>
    )
}

export default Contact