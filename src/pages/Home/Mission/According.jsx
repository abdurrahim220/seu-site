import React from 'react'
import { Collapse } from 'react-collapse';

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const According = ({ open, toggle, title, desc }) => {
    return (
        <div className='pt-3 font-roboto'>
            <div className='py-6 px-12 flex justify-between items-center cursor-pointer' onClick={toggle}>
                <p className='lg:text-2xl font-semibold'>{title}</p>
                <div className='text-3xl'>
                    {
                        open ? <AiOutlineMinus /> : <AiOutlinePlus />
                    }
                </div>
            </div>
            <Collapse isOpened={open}>
                <div className='bg-white px-12 text-[14px] lg:text-[16px] pb-5'>
                    {desc}
                </div>

            </Collapse>

        </div>
    )
}

export default According