import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import GalleryTabsCard from "./GalleryTabsCard";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import PageBanner from "../Shared/PageBanner/PageBanner";
import PageTransition from "../../hooks/PageTransition";


const Gallery = () => {
  const [gallerys, setGallerys] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ['All Picture', 'CSE'];

  useEffect(() => {
    fetch("http://localhost:5000/gallery")
      .then((res) => res.json())
      .then((data) => {
        setGallerys(data);
      });
  }, []);
  const img = 'https://i.ibb.co/FH9079F/eric-park-Qb-X8-A8e-Hfzw-unsplash.jpg';
  const backgroundColor = 'rgba(122, 148, 167, 0.3)';



  return (
    <PageTransition>

      <div style={{backgroundColor}}>
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
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {
                  gallerys.map((gallery) => {
                    return <div className="gap-4 grid">
                      <img className="h-auto max-w-full rounded-lg" src={gallery.image_url} key={gallery._id} alt="" srcset="" />
                    </div>
                  })
                }
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                  gallerys.slice(6, 10).map((gallery) => {
                    return <img src={gallery.image_url} key={gallery._id} alt="" srcset="" />
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
