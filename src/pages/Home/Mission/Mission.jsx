import React from "react";

const Mission = () => {
  return (
    <>

      <div className="mx-auto container flex justify-center">
        <div className="box-border border-8 bg-[#ECF1F5] py-5">
          <h1 className="text-[#131c33] my-4 text-5xl font-bold font-sans">Our Mission</h1>
          <img className="object-contain h-[400px] w-[400px]	" src="https://i.ibb.co/7GNw5CT/366800826-251573807763023-722381529471720335-n.jpg" alt="" />
          <p className="mb-[10px] text-ellipsis overflow-hidden">There are many company Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis csetur adipicing elit, sed do eiusmod tempor dncint ut labore et dolore magna alis enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          <p className="mb-[10px]">There are many company Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          <button className="btn btn-primary">Know More</button>
        </div>

      </div>

    </>
  );
};

export default Mission;
