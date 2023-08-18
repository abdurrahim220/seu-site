import React from 'react'
import { Link } from 'react-router-dom';

const EventCard = ({ data }) => {
    const { eventName, eventImage, eventDescription, endTime, _id } = data;
    // console.log(_id)

   



    return (
        <div className="hero mx-auto flex max-w-screen-lg bg-[#3b60c9] text-white">
            <div className="hero-content flex-col lg:flex-row">
                <img src={eventImage} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{eventName}</h1>
                    <p className="py-6">{eventDescription}</p>
                    <Link to={`/eventsDetails/${_id}`}><button className="btn btn-primary">See Details</button></Link>
                </div>
            </div>
        </div>
    )
}

export default EventCard