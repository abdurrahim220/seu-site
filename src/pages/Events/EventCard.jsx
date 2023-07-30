import React from 'react'

const EventCard = ({ data }) => {
    const { img,description,end_date,title ,id} = data;
    return (
        <div className="hero mx-auto flex max-w-screen-lg bg-[#3b60c9] text-white">
            <div className="hero-content flex-col lg:flex-row">
                <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{title}</h1>
                    <p className="py-6">{description}</p>
                    <button onClick={id} className="btn btn-primary">See Details</button>
                </div>
            </div>
        </div>
    )
}

export default EventCard