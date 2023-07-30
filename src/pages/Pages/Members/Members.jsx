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
            <h1>Members:{members.length}</h1>

            <div>
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
                        <tbody>
                            {
                                members.map((member) => {
                                    <MembersCard key={member.id} member={member}></MembersCard>
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