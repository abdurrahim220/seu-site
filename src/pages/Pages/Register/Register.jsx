import React from 'react'
import PageBanner from '../../Shared/PageBanner/PageBanner'
import { Helmet } from 'react-helmet-async'

const Register = () => {
    return (
        <>
            <Helmet>
                <title>SEU || Register</title>
            </Helmet>
            <PageBanner></PageBanner>

            <div className='flex my-10 gap-3 container mx-auto items-center justify-center'>
                <div className='flex flex-col items-center'>
                    <h1>Already a Member?</h1>
                    <input type="text" placeholder='Enter Your id' required />
                    <input type="text" placeholder='Password' required />
                </div>
                <div className='bg-red-800 h-[500px] w-1 text-red-500'>
                
                </div>
                <div>
                    <div className=''>
                        <h1 className="text-2xl font-bold">Register</h1>

                        <form onSubmit="">
                            <div className='flex flex-row gap-3'>
                                <div className='flex flex-col'>
                                    <label className='text-[#000] font-semibold mb-2'>Email</label>
                                    <input type="text" placeholder="Your full name" className="border-4 px-[10px] py-[10px]" required/>
                                </div>
                                <div className='flex flex-col'>
                                    <label className='text-[#000] font-semibold mb-2'>Password</label>
                                    <input type="password" placeholder="Your email" className="border-4 px-[10px] py-[10px]" required/>
                                </div>
                            </div>
                            <div className='flex flex-row gap-3'>
                                <div className='flex flex-col'>
                                    <label className='text-[#000] font-semibold mb-2'>Name</label>
                                    <input type="text" placeholder="Your full name" className="border-4 px-[10px] py-[10px]" required/>
                                </div>
                                <div className='flex flex-col'>
                                    <label className='text-[#000] font-semibold mb-2'>Student Id</label>
                                    <input type="number" placeholder="Your email" className="border-4 px-[10px] py-[10px]" required/>
                                </div>
                            </div>
                            <div className='flex flex-row gap-3'>
                                <div className='flex flex-col'>
                                    <label className='text-[#000] font-semibold mb-2'>Passing Year</label>
                                    <input type="date" placeholder="Your full name" className="border-4 px-[10px] py-[10px]" />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='text-[#000] font-semibold mb-2'>Department</label>
                                    <input type="email" placeholder="Your email" className="border-4 px-[10px] py-[10px]" />
                                </div>
                            </div>

                            <div className='flex my-4 gap-2'>
                                <input type="checkbox" className='checkbox' name="" id="" />
                                <label className='text-[#000] font-semibold mb-2'>Read Activities</label>
                            </div>

                            <input type="submit" className='bg-[#3b60c9] text-white py-3 px-10 text-2xl font-[400]' value="Register" />

                        </form>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Register