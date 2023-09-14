import React, { useContext } from 'react'
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom'
import PageBanner from '../../pages/Shared/PageBanner/PageBanner'
import { FcCheckmark } from 'react-icons/fc'
import { SiMdbook } from 'react-icons/si'
import { AiOutlineSchedule } from 'react-icons/ai'
import { MdOutlineTopic } from 'react-icons/md'
import Card from './Card'
import { AuthContext } from '../../Provider/AuthProvider'
import Swal from 'sweetalert2'
import useAndroid from '../../hooks/useAndroid'

const AndroidDetails = () => {
    const data = useLoaderData()
    const { user } = useContext(AuthContext);
    const location = useLocation();
    const [, refetch] = useAndroid();
    const navigate = useNavigate();

    const { courseName, courseCode, instructor, startDate, endDate, schedule, totalClasses, totalDurationWeeks, description, prerequisites, topicsCovered, learningObjectives, resources, price, _id } = data;

    const { textbooks, onlineResources } = resources;

    const { days } = schedule
    // console.log(days)
    const handleAddToCart = (dataItem) => {
        // console.log(data);

        if (user && user.email) {
            const dataItem = { dataItem: _id, courseName, courseCode, price, email: user.email }
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(dataItem)

            }).then(res => res.json()).then(data => {
                // refetch cart to update the number of cart

                if (data.insertedId) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your food added on the card',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }

            })
        }
        else {
            Swal.fire({
                title: 'Please login to order the food?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        navigate('/login', { state: { from: location } })
                    )
                }
            })
        }

    }


    return (
        <div className='bg-[#f0f5fb]'>
            <PageBanner />


            <div className='flex justify-center py-10 items-center'>
                <h1 className='text-2xl lg:text-4xl'>Learn User Interface and User Experience</h1>
            </div>
            <div className="grid grid-cols-1 max-w-screen-lg pb-12 rounded-sm mx-auto gap-4 lg:grid-cols-3 lg:gap-8">
                <div className="h-auto max-w-screen-md rounded-lg bg-gray-100 lg:col-span-2">
                    <div>
                        <div className='bg-white grid  px-5 py-5 mx-auto'>
                            <h1 className='text-[18px] font-bold py-2 leading-3'>{courseName}</h1>
                            <p className='text-[14px] py-2 leading-3'>{description}</p>

                            <div>
                                <h1 className='text-[18px] font-bold leading-3 py-4'>What you will learn?</h1>
                                <ul className='text-[14px] leading-3'>
                                    {
                                        learningObjectives.map(data => {
                                            return <li className='px-5 py-1 flex gap-1 leading-3 items-center'><FcCheckmark />{data}</li>
                                        })
                                    }
                                </ul>
                            </div>
                            <div>
                                <h1 className='text-[18px] font-bold leading-3 py-4'>Requirements</h1>
                                <ul className='text-[14px] leading-3'>
                                    {
                                        prerequisites.map(data => {
                                            return <li className='px-5 py-1  flex gap-1 items-center'><FcCheckmark />{data}</li>
                                        })
                                    }
                                </ul>
                            </div>
                            <div>
                                <h1 className='text-[18px] font-bold leading-3 py-4'>Resources</h1>
                                <ul className='text-[14px] leading-3'>
                                    {
                                        textbooks.map(data => {
                                            return <li className='px-5 py-1 flex gap-1 items-center'><SiMdbook />{data}</li>
                                        })
                                    }
                                </ul>
                            </div>
                            <div>
                                <h1 className='text-[18px] font-bold leading-3 py-4'>Topic Will be Covered</h1>
                                {
                                    topicsCovered.map(data => {
                                        return <li className='px-5 py-1 flex gap-1 items-center'><MdOutlineTopic />{data}</li>
                                    })
                                }
                            </div>
                            <div>
                                <h1 className='text-[18px] font-bold leading-3 py-4'>Class Time</h1>
                                {
                                    days.map(data => {
                                        return <li className='px-5 py-1 flex gap-1 items-center'><AiOutlineSchedule />{data}</li>
                                    })
                                }
                            </div>

                        </div>
                        {/* //todo : instructor page */}
                        {/* <div>
                    {
                        instructor.forEach(data,index=>{
                            return <Card key={index} data={data}></Card>
                        })
                    }
                </div> */}
                    </div>
                </div>

                <div className="h-screen  rounded-lg ">
                    <div className="card w-96 bg-base-100">
                        <div className="card-body">
                            <h2 className="card-title">Name: {courseName}</h2>
                            <p className="card-title">Course Code : {courseCode}</p>
                            <p className="card-title">Price : {price}</p>
                            <div className="card-actions flex justify-center items-center">
                                <button onClick={() => handleAddToCart(data)} className="btn btn-outline border-0 border-b-4 mt-4">Add To Cart</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AndroidDetails