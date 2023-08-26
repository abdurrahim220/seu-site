import React from 'react';

const Card = ({ data }) => {
    const {name,image,email} = data;
  return (
    <div className="max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
      <img className="object-cover object-center h-40 w-full" src={image} alt={img} />
      <div className="p-4">
        <h2 className="text-gray-800 text-lg font-semibold">{name}</h2>
        <p className="mt-2 text-gray-600 text-sm">{email}</p>
      </div>
    </div>
  );
};

export default Card;
