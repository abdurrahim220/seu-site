import React from 'react'
import CountUp from 'react-countup';
import { BiGroup} from 'react-icons/bi';
import { TbPhotoCheck} from 'react-icons/tb';
import { MdEventRepeat } from 'react-icons/md';
import { FiAward } from 'react-icons/fi';




const MemberConuntUp = () => {
    return (
        <div className='bg-[#161f37]'>

            <div className='grid container mx-auto grid-cols-1 md:grid-cols-2 justify-items-center py-16 lg:grid-cols-4'>
                <div className='flex gap-5  items-center'>
                    <div className='text-white '><BiGroup  size={100}/></div>
                    <div className='text-white text-[2rem]'>
                        <CountUp start={1} end={1500} duration={3} />
                        <p>Members</p>
                    </div>
                </div>

                <div className='flex gap-5  items-center'>
                    <div className='text-white'><TbPhotoCheck size={100}/></div>
                    <div className='text-white text-[2rem]'>
                        <CountUp start={1} end={1500} duration={3} />
                        <p>Photos</p>
                    </div>
                </div>


                <div className='flex gap-5  items-center'>
                    <div className='text-white'><MdEventRepeat size={100}/></div>
                    <div className='text-white text-[2rem]'>
                        <CountUp start={1} end={480} duration={3} />
                        <p>Events</p>
                    </div>
                </div>


                <div className='flex gap-5  items-center'>
                    <div className='text-white'><FiAward size={100}/></div>
                    <div className='text-white text-[2rem]'>
                        <CountUp start={1} end={1500} duration={3} />
                        <p>Award</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MemberConuntUp