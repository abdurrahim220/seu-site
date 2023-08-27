import React from 'react'
import { Link } from 'react-router-dom';

const AndroidCard = ({ data }) => {
  const { courseName, totalClasses, totalDurationWeeks, description, _id } = data;
  const price = 20;
  return (
    <div className="card w-96 bg-base-100 shadow-xl transition-transform transform hover:scale-105">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="android" /></figure>
  <div className="card-body">
    <div>
      <h2 className="card-title">
        {courseName}
        <div className="badge badge-secondary">${price}</div>
      </h2>
    </div>
    <p>{description}</p>
    <div className="flex">
      <p className='text-green-500 flex font-bold justify-end'></p>
    </div>
    <div className='flex justify-between items-center'>
      <div className="card-actions justify-start">
        <div className="badge badge-outline">{totalClasses} Lecture</div>
        <div className="badge badge-outline text-green-400">{totalDurationWeeks} Hours</div>
      </div>
      <Link to={`/androidDetails/${_id}`}>
        <button className='bg-[#00ab15] rounded-full px-6 py-2 font-semibold hover:bg-gray-500 text-white transition-colors'>
          Enroll Now
        </button>
      </Link>
    </div>
  </div>
</div>

  )
}

export default AndroidCard