import React from 'react'
import CountUp from 'react-countup';
import { HiUserGroup } from 'react-icons/hi';
import { MdEventRepeat,MdAddAPhoto } from 'react-icons/md';
import { FiAward } from 'react-icons/fi';




const MemberConuntUp = () => {
    return (
        <div className='bg-[#161f37]'>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                <div className='grid grid-flow-col'>
                    <div className='text-white'><HiUserGroup/></div>
                    <div className='text-white'>
                        <CountUp   start={1} end={1500} duration={3}/>
                        <p>Members</p>
                    </div>
                </div>

                <div className='grid grid-flow-col'>
                    <div className='text-white'><MdAddAPhoto/></div>
                    <div className='text-white'>
                        <CountUp   start={1} end={1500} duration={3}/>
                        <p>Photos</p>
                    </div>
                </div>


                <div className='grid grid-flow-col'>
                    <div className='text-white'><MdEventRepeat/></div>
                    <div className='text-white'>
                        <CountUp   start={1} end={480} duration={3}/>
                        <p>Events</p>
                    </div>
                </div>


                <div className='grid grid-flow-col'>
                    <div className='text-white'><FiAward/></div>
                    <div className='text-white'>
                        <CountUp   start={1} end={1500} duration={3}/>
                        <p>Award</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MemberConuntUp