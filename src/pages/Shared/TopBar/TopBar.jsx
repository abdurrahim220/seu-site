import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = () => {
    return (
        <div className='bg-[#161F37]'>
            <div className='max-w-screen-xl mx-auto text-white flex justify-around'>
                <div className='flex gap-3 items-center'>
                    <p><span className='text-lg font-bold box-border'>Email:</span> info@codeboxr.com</p>
                    <p><span className='text-lg font-bold box-border'>Hotline:</span>880 454 5477</p>
                </div>
                <div className='flex gap-3'>

                    <Link to="/register" className='bg-[#3b60c9] hover:bg-[#1dd983] px-[30px] py-[5px] text-lg font-bold text-white'>login</Link>
                    <Link to="/register" className='bg-[#1dd983] hover:bg-[#3b60c9] px-[30px] py-[5px] text-lg font-bold text-white'>Sign Up</Link>

                </div>
            </div>
        </div>
    )
}

export default TopBar