import React from 'react'
import { Link } from 'react-router-dom';

const JobsCard = ({ data }) => {
    const { jobTitle, image, jobDescription, _id } = data;
    return (
        <div data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            className="card w-96 border px-2 hover:transform hover:scale-110 transition-transform duration-300 ease-in-out">
            <figure className="px-6 pt-6">
                <img src={image} alt="jobs" className="mask mask-circle w-16 h-16" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{jobTitle}</h2>
                <p>{jobDescription}</p>
                <div className="card-actions">
                    <Link to={`/jobsDetails/${_id}`}> <button className="btn uppercase hover:bg-[#212529] text-white text-[1.4rem] bg-[#1dd983]">Apply Now</button></Link>
                </div>
            </div>
        </div>
    )
}

export default JobsCard