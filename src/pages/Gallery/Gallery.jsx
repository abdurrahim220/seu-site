import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import GalleryTabsCard from "./GalleryTabsCard";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import PageBanner from "../Shared/PageBanner/PageBanner";
import PageTransition from "../../hooks/PageTransition";
import useGallery from "../../hooks/useGallery";


const Gallery = () => {
  const [galleries] = useGallery()
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ['All Picture', 'CSE'];

  const img = 'https://i.ibb.co/FH9079F/eric-park-Qb-X8-A8e-Hfzw-unsplash.jpg';
  
  const backgroundColor = 'rgba(122, 148, 167, 0.3)';


  return (
    <PageTransition>

      <div style={{ backgroundColor }}>
        <Helmet>
          <title>SEU || Gallery</title>
        </Helmet>

        <PageBanner img={img} title={"Capture The memory"} description={"All the southeast memories are here at one place"} />


        <div>
          <Tabs>
            <div className="flex gap-2 justify-center my-5">
              <TabList className="flex gap-2">
                <Tab className='btn btn-outline btn-sm btn-primary'>All Picture</Tab>
                <Tab className='btn btn-outline btn-sm btn-warning'>CSE</Tab>
              </TabList>
            </div>

            <TabPanel>
              <div className="flex justify-center flex-wrap gap-4">
                {
                  galleries.map((gallery) => {
                    return <div className="gap-4 relative flex flex-col w-1/4">
                      <img className="h-[350px] max-w-full  transition-transform duration-300 transform scale-100 hover:scale-110  rounded-lg" src={gallery.image_url} key={gallery._id} alt="" srcset="" />
                    </div>
                  })
                }
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex justify-center flex-wrap gap-4">
                {
                  galleries.slice(6, 10).map((gallery) => {
                    return <div className="gap-4 relative flex flex-col w-1/4">
                      <img className="h-[350px]  transition-transform duration-300 transform scale-100 hover:scale-110 max-w-full rounded-lg" src={gallery.image_url} key={gallery._id} alt="" srcset="" />
                    </div>
                  })
                }</div>

            </TabPanel>
          </Tabs>
        </div>

        {/* <GalleryTabsCard></GalleryTabsCard> */}



      </div>
    </PageTransition>
  );
};

export default Gallery;
