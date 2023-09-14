import React from 'react'
import { Link } from 'react-router-dom';

const EventCard = ({ data }) => {
    const { eventName, eventImage, eventDescription, endTime, _id } = data;
    // console.log(_id)
    return (
        <div className="flex flex-col justify-center">
            <div
                className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
                <div className="w-full md:w-1/3 bg-white grid place-items-center">
                    <img src={eventImage} alt="tailwind logo" className="rounded-xl" />
                </div>
                <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                    <div className="flex justify-between item-center">
                        <p className="text-gray-500 font-medium hidden md:block">{eventName}</p>
                        <div className="flex items-center">

                            <p className="text-gray-600 font-bold text-sm ml-1">

                                <span className="text-gray-500 font-normal">{endTime}</span>
                            </p>
                        </div>

                    </div>
                    <h3 className="font-black text-gray-800 md:text-3xl text-xl">{eventName}</h3>
                    <p className="md:text-lg text-gray-500 text-base">{eventDescription}</p>

                    <div class="flex item-center justify-end mt-3">
                        
                        <Link to={`/eventsDetails/${_id}`}><button className="btn btn-primary">See Details</button></Link>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default EventCard