import React, { useEffect, useState } from 'react'
import MembersCard from './MembersCard';

const Members = () => {
    const [members, setMembers] = useState([]);
    useEffect(() => {
        fetch("member.json")
            .then(res => res.json())
            .then(data => {
                setMembers(data)
            })
    }, [])
    return (
        <>

            <div className='my-15'><div className="form-control">
                <div className="input-group">
                    <input type="text" placeholder="Search…" className="input input-bordered" />
                    <button className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
                <div className="container mx-auto text-white overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className='bg-[#3b60c9] text-white'>
                            <tr>
                                <th>Name</th>
                                <th>Department</th>
                                <th>Batch</th>
                                <th>Campus</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody className='text-black'>
                            {
                                members.map((member) => {
                                    return <MembersCard key={member.id} member={member}></MembersCard>
                                })
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Members