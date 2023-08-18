import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import GalleryTabsCard from "./GalleryTabsCard";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const Gallery = () => {
  const [gallerys, setGallerys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/gallery")
      .then((res) => res.json())
      .then((data) => {
        setGallerys(data);
      });
  }, []);

  return (

    <>
      <Helmet>
        <title>SEU || Gallery</title>
      </Helmet>
      <h1>{gallerys.length}</h1>


      <div>
        <Tabs>
          <TabList>
            <Tab>All Picture</Tab>
            <Tab>CSE</Tab>
          </TabList>

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



    </>
  );
};

export default Gallery;
