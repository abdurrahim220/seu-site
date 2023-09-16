import React from 'react'

import Link from 'react'

const UpdateAndDelete = ({data}) => {
    const { courseName, totalClasses, totalDurationWeeks, description, _id ,price} = data;
    return (
        <div className="card w-96 bg-neutral font-poppins text-neutral-content">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{courseName}</h2>
                <h2 className="card-title text-red-300">Price: ${price}</h2>
                <p>{description}</p>
                <div className="card-actions text-white justify-start">
                    <div className="badge badge-outline">Total Class : {totalClasses}</div>
                    <div className="badge badge-outline">TotalDuration : {totalDurationWeeks}</div>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/androidDetails/${_id}`}>
                        <button className='bg-[#00ab15] rounded-full px-6 py-2 font-semibold hover:bg-gray-500 text-white transition-colors'>
                            Enroll Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>)
}

export default UpdateAndDelete