import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [gallerys, setGallerys] = useState([]);

  useEffect(() => {
    fetch("events.json")
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
      <h1>rahim:{gallerys.length}</h1>

      <img src={gallerys.image} alt="" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {
          gallerys.map((gallery, index) => {
            <div>
              <img className="h-auto max-w-full rounded-lg" src={gallery.image} alt="" />
            </div>
          })
        }
      </div>

    </>
  );
};

export default Gallery;
