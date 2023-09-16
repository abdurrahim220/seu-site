import React from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import {FaTrashAlt} from 'react-icons/fa'


const ActionCard = ({ data,handleDelete}) => {

    const { courseName, totalClasses, totalDurationWeeks, description, _id, price } = data;

    

    return (
        <div className="card w-96 bg-neutral font-poppins text-neutral-content">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{courseName}</h2>
                <h2 className="card-title text-red-300">Price: ${price}</h2>
                <p>{description}</p>
                <div className="card-actions text-white justify-start">
                    <div className="badge badge-outline">Total Class : {totalClasses}</div>
                    <div className="badge badge-outline">TotalDuration : {totalDurationWeeks}</div>
                </div>
                <div><button onClick={() => handleDelete(data)} className="btn btn-ghost btn-sm text-white bg-red-500"><FaTrashAlt></FaTrashAlt></button></div>
            </div>
        </div>)
}

export default ActionCard