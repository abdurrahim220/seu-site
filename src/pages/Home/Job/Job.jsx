import React, { useState } from 'react'
import JobsCard from './JobsCard';

const Job = () => {

    const [jobs, setJobs] = useState([]);

    useState(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => {
                setJobs(data)
            })
    }, []);

    return (
        <div className='bg-[#fff] mb-20 font-poppins'>
            <div className='mt-32 flex justify-center mb-20'

                data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="50"
                data-aos-duration="1000"
            >
                <h1 className='text-[3.2rem] font-bold'>Recent Jobs</h1>
            </div>

            <div className='grid justify-center grid-cols-1 lg:px-32 px-4 md:grid-cols-3 gap-2 container mx-auto'>
                {
                    jobs.slice(0, 6).map((data) => {
                        return <JobsCard key={data._id} data={data} />
                    })
                }
            </div>
        </div>
    )
}

export default Job