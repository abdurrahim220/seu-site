import React from 'react'
import { useLoaderData } from 'react-router-dom'

const JobsDetails = () => {
    const jobsData = useLoaderData();
    const { jobTitle, jobDescription, company, location, jobType, postedDate, applicationDeadline, requirements, responsibilities, perks, howToApply, contact } = jobsData;
    return (
        <div className='container mx-auto mt-10'>
            <h1>{jobTitle}</h1>
            <h1>{company}</h1>
            <ol><li>Job Context</li>
                <li className='px-5'>{jobDescription}</li></ol>
            <ul><li>Job Responsibilities :{responsibilities.length}</li>
                {
                    responsibilities.map(data =>
                        <li className='px-5'>{data}</li>)
                }
            </ul>
            <h1>Employment Status:<br/> <span className='px-5'>{jobType}</span></h1>
            <h1>Workplace:<br/><span className='px-5'>{location}</span></h1>
            <p>Job Requirement <br />
            <ul>
                {
                     requirements.map(data =>
                        <li className='px-5'>{data}</li>)
                }
            </ul>
            </p>
            <p>Compensation & Other Benefits <br />
            <ul>
                {
                    perks.map(data =>
                        <li className='px-5'>{data}</li>)
                }
            </ul>
            </p>
            <h1>Published On:{postedDate}</h1>
            <h1>Application Deadline : {applicationDeadline}</h1>

            <p>Contact <br />
            <ul>
            {Object.entries(contact)}
            </ul>
            </p>
            <h1>howToApply: {howToApply}</h1>

        </div>
    )
}

export default JobsDetails