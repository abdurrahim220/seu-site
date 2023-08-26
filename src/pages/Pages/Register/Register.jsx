import React, { useState } from 'react'
import PageBanner from '../../Shared/PageBanner/PageBanner'
import { Helmet } from 'react-helmet-async'
import Swal from 'sweetalert2'

const Register = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const id = form.id.value;
        const email = form.email.value;
        const role = form.role.value;
        const department = form.department.value;
        const clubName = form.clubName.value;
        const image = form.image.value;
        const batch = form.batch.value;
        const addInfo = {
            name, id, email, role, department, clubName,batch,image
        };
        console.log(addInfo)

        fetch(`https://server2-abdurrahim220.vercel.appaddMembers`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addInfo)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    Swal.fire('Info Added Successfully');
                }
            })

    };
    return (
        <>
            <Helmet>
                <title>SEU || Register</title>
            </Helmet>
            <PageBanner></PageBanner>


            <div className='mt-28 mb-20'>
                <div className="p-8 max-w-md mx-auto border rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4">Club Registration</h2>
                    <form onSubmit={handleSubmit}>
                        {/* name */}
                        <div className="mb-4">
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                                Your Full Name
                            </label>
                            <input
                                type="text"
                                className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none sm:text-sm"
                                placeholder='Your Full Name'
                                name='name'
                                required
                            />
                        </div>
                        {/* id */}
                        <div className="mb-4">
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                                Your id
                            </label>
                            <input
                                type="number"
                                className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none sm:text-sm"
                                name='id'
                                required
                            />
                        </div>
                        {/* batch */}
                        <div className="mb-4">
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                                Your Batch
                            </label>
                            <input
                                type="number"
                                className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none sm:text-sm"
                                name='batch'
                                defaultValue={2023}
                                required
                            />
                        </div>
                        {/* email */}
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Photo
                            </label>
                            <input
                                type="text"
                                name="image"
                                className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none sm:text-sm"
                                required
                                placeholder='Your Picture'
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none sm:text-sm"
                                required
                            />
                        </div>

                        {/* Role */}
                        <div className="mb-4">
                            <label htmlFor="membershipType" className="block text-sm font-medium text-gray-700">
                                Role
                            </label>
                            <select
                                name="role"
                                className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none sm:text-sm"
                                required
                            >
                                <option value="">Select Type</option>
                                <option value="Member">Member</option>
                                <option value="President">President</option>
                                <option value="VicePresident">VicePresident</option>
                                <option value="Secretary">Secretary</option>
                                <option value="Treasurer">Treasurer</option>
                                <option value="Advisor">Advisor</option>
                                <option value="ProjectManager">Project Manager</option>
                            </select>
                        </div>

                        {/* department */}
                        <div className="mb-4">
                            <label htmlFor="membershipType" className="block text-sm font-medium text-gray-700">
                                Select Department
                            </label>
                            <select
                                name="department"
                                className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none sm:text-sm"
                                required
                            >
                                <option value="">Select Department</option>
                                <option value="CSE">CSE</option>
                                <option value="EEE Club">EEE</option>
                            </select>
                        </div>
                        {/* club name */}
                        <div className="mb-4">
                            <label htmlFor="membershipType" className="block text-sm font-medium text-gray-700">
                                Select Club
                            </label>
                            <select
                                name="clubName"
                                className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none sm:text-sm"
                                required
                            >
                                <option value="">Select Club Type</option>
                                <option value="Computer Club">Computer Club</option>
                                <option value="EEE Club">EEE</option>
                            </select>
                        </div>


                        <div className="mt-4">
                            <input type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200" value="Register" />
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Register