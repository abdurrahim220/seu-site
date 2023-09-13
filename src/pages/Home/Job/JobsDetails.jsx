import React from 'react'
import { useLoaderData } from 'react-router-dom'
import PageBanner from '../../Shared/PageBanner/PageBanner';

import { GoDotFill } from 'react-icons/go'
import { FaMapLocationDot, FaFileContract } from 'react-icons/fa6'
import { BiSolidTimer } from 'react-icons/bi'
import { BsPersonWorkspace, BsFillCalendarCheckFill } from 'react-icons/bs'
import { MdLocalOffer } from 'react-icons/md'


const JobsDetails = () => {
    const jobsData = useLoaderData();
    const { jobTitle, jobDescription, company, location, jobType, postedDate, applicationDeadline, requirements, responsibilities, perks, howToApply, contact } = jobsData;
    console.log(contact)
    const img = 'https://i.ibb.co/rZhCmKn/forHire.jpg'
    return (
        <div >
            <PageBanner img={img} title={"Job Details"} description={"Follow the footstep"} />
            <div className='container max-w-screen-md mt-20 border bg-white mb-10 mx-auto font-roboto'>
                <h1 className='text-[#2b882f] font-bold text-[18px] px-5 mt-14 pb-2'>{jobTitle}</h1>

                <h1 className='text-[#333333] text-[16px] font-bold px-5 pb-2'>{company}</h1>

                <ol className=''>
                    <li className='font-bold px-5 py-1'>Job Context</li>
                    <li className='px-10 mb-2'>{jobDescription}</li>
                </ol>

                <ul className='mb-2'>
                    <li className='font-bold px-5 leading py-1'>Job Responsibilities :</li>
                    {
                        responsibilities.map(data =>
                            <li className='px-10 flex gap-1 items-center'><GoDotFill />{data}</li>)
                    }
                </ul>

                <ul>
                    <li className='font-bold px-5 pt-1 leading'>Employment Status:</li>
                    <li className='px-10 py-1 flex gap-1 items-center'><BiSolidTimer size={20} />{jobType}</li>
                </ul>

                <ul>
                    <li className='font-bold px-5 py-1 leading'>Workplace:
                    </li>
                    <li className='px-10 py-1 flex gap-1 items-center'><FaMapLocationDot size={20} />{location}</li>

                </ul>

                <ul>
                    <li className='font-bold px-5 py-2 leading'>Job Requirement </li>
                    {
                        requirements.map(data =>
                            <li className='px-10 flex gap-1 py-1 items-center'><BsPersonWorkspace size={20} />{data}</li>)
                    }

                </ul>

                <ul>
                    <li className='font-bold px-5 py-2 leading'>Compensation & Other Benefits </li>
                    {
                        perks.map(data =>
                            <li className='px-10 flex gap-1 py-1 items-center'><MdLocalOffer size={20} />{data}</li>)
                    }
                </ul>

                <h1 className=' flex gap-1 px-5 py-2 items-center'><BsFillCalendarCheckFill size={15} /><span className='font-bold'>Published On</span>: {postedDate}</h1>
                <h1 className=' flex gap-1 px-5 py-2 items-center'><BsFillCalendarCheckFill size={15} /> <span className='font-bold'>Application Deadline </span>: {applicationDeadline}</h1>

                <ul>
                    <li className='flex gap-1 px-5 items-center'><FaFileContract />Contact </li>

                    {/* {Object.entries(contact)} */}
                    {/* {
                        contact.forEach(data=>{
                         <li>{data.email}</li>
                        })
                    } */}
                </ul>

                <h1 className='mb-5'>howToApply: {howToApply}</h1>

            </div>
        </div>
    )
}

export default JobsDetails