import React, { useState } from "react";

import don_t_Animation from "../../../assets/LottiAnimaton/study_man.json";

import Lottie from "lottie-react";
import According from "./According";

const Mission = () => {

  const [open, setOpen] = useState(false);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null)
    }

    setOpen(index)

  }
  const accordingData = [
    {
      "title": "This is home title 1",
      "desc": "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium harum ut officia deserunt similique asperiores voluptates eos id delectus ad rem expedita, odit assumenda! Cupiditate minima provident molestiae. Odit corrupti adipisci ad temporibus aliquam expedita officia nostrum unde recusandae suscipit."
    },
    {
      "title": "This is home title 2",
      "desc": "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium harum ut officia deserunt similique asperiores voluptates eos id delectus ad rem expedita, odit assumenda! Cupiditate minima provident molestiae. Odit corrupti adipisci ad temporibus aliquam expedita officia nostrum unde recusandae suscipit."
    },
    {
      "title": "This is home title 3",
      "desc": "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium harum ut officia deserunt similique asperiores voluptates eos id delectus ad rem expedita, odit assumenda! Cupiditate minima provident molestiae. Odit corrupti adipisci ad temporibus aliquam expedita officia nostrum unde recusandae suscipit."
    },
  ]
  return (
    <>

      <div className="flex justify-center">
        <h1 className="text-[#131c33] hover:text-stone-300 my-4 text-5xl lg:text-7xl font-bold font-sans">Our Mission</h1>
      </div>

      <div className="mx-auto container lg:flex  gap-3 items-center justify-center">
        <div>
          <Lottie animationData={don_t_Animation} loop={true} />;
        </div>

        <div className="px-10 max-w-3xl">
          {
            accordingData.map((data, index) => {
              return <According key={index} open={index === open} title={data.title} desc={data.desc} toggle={() => toggle(index)} />
            })
          }
        </div>

      </div>

    </>
  );
};

export default Mission;
