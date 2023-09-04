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
    const [,refetch]=useAndroid();
    const navigate = useNavigate();
    
    const { courseName, courseCode, instructor, startDate, endDate, schedule, totalClasses, totalDurationWeeks, description, prerequisites, topicsCovered, learningObjectives, resources, price,_id} = data;

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
            <div>
                <div><h1 className='flex justify-center items-center'>Learn User Interface and
                    User Experience</h1></div>

                <div className='container bg-white grid   mx-auto'>
                    <h1>{courseName}</h1>
                    <p>{description}</p>

                    <div>
                        <h1>What you will learn?</h1>
                        <ul>
                            {
                                learningObjectives.map(data => {
                                    return <li className='px-5 flex gap-1 items-center'><FcCheckmark />{data}</li>
                                })
                            }
                        </ul>
                    </div>
                    <div>
                        <h1>Requirements</h1>
                        <ul>
                            {
                                prerequisites.map(data => {
                                    return <li className='px-5 flex gap-1 items-center'><FcCheckmark />{data}</li>
                                })
                            }
                        </ul>
                    </div>
                    <div>
                        <h1>Resources</h1>
                        <ul>
                            {
                                textbooks.map(data => {
                                    return <li className='px-5 flex gap-1 items-center'><SiMdbook />{data}</li>
                                })
                            }
                        </ul>
                    </div>
                    <div>
                        <h1>Topic Will be Covered</h1>
                        {
                            topicsCovered.map(data => {
                                return <li className='px-5 flex gap-1 items-center'><MdOutlineTopic />{data}</li>
                            })
                        }
                    </div>
                    <div>
                        <h1>Class Time</h1>
                        {
                            days.map(data => {
                                return <li className='px-5 flex gap-1 items-center'><AiOutlineSchedule />{data}</li>
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
            <div>
                <div className="card-actions">
                    <button onClick={() => handleAddToCart(data)} className="btn btn-outline border-0 border-b-4 mt-4">Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default AndroidDetails