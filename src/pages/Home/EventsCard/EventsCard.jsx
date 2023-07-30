import React, { useEffect, useState } from "react";

const EventsCard = () => {
  const [events, setEvent] = useState([]);
  useEffect(() => {
    fetch("events.json")
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
      });
  }, []);
  return (
    <>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {events.slice(0,4).map((event,index) => (
          <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl:">
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
            <img
              className="group-hover:scale-125 transition-all duration-500 rounded-lg w-full"
              src={event.image}
              alt=""
            />
        
            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-600 z-50">
              <span className="text-3xl text-white">{event.eventName}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default EventsCard;
