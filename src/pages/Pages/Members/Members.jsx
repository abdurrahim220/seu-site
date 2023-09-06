import React, { useEffect, useState } from 'react'
import MembersCard from './MembersCard';
import PageBanner from '../../Shared/PageBanner/PageBanner';
import CountUp from 'react-countup';

const Members = () => {
    const [members, setMembers] = useState([]);
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(20)
    const memberImg = "https://i.ibb.co/JvvsrYs/headway-F2-KRf-Qf-Cqw-unsplash.jpg"

    const [searchText, setSearchText] = useState("")
    // console.log(searchText);

    useEffect(() => {
        fetch(`http://localhost:5000/members?limit=${limit}&page=${page}`)
            .then(res => res.json())
            .then(data => {
                setMembers(data)
            })
    }, []);

    const handleSearchText = () => {
        useEffect((
            fetch(`http://localhost:5000/members/${searchText}`)
                .then(res => res.json())
                .then(data => {
                    setMembers(data);
                })
        ), [])
    }

    return (
        <div>
            <PageBanner img={memberImg} title={"Southeast Members"} description={"All The register members are here you can search by their name or id"}/>
            <div className='bg-[#FFFFFF]'>

                <div className='flex justify-center mt-28'>
                    <h1 className='text-[#3a3b3c] lg:text-[3.6rem] text-[1.6rem] font-bold'>Now we have <span className='text-[#3b60c9]'> <CountUp start={1} end={members.length} duration={3} /></span> member</h1>
                </div>


                <div className='flex items-center gap-2 justify-center mt-28 mb-10'>
                    <input type="text" onChange={(e) => setSearchText(e.target.value)} className='border-2 border-[#3b60c9] px-5 py-4' name="" id="" placeholder='Type Text Here' />
                    <label htmlFor="">
                        <button onClick={handleSearchText} className='px-5 py-4 bg-[#3b60c9] text-white text-2xl font-bold rounded'>Search</button>
                    </label>
                </div>

                <div className="container mx-auto text-white overflow mb-10">
                    <table className="table border-4 border-[#e9ecef]">
                        {/* head */}
                        <thead className='bg-[#3b60c9] text-white'>
                            <tr>
                                <th className='text-center text-[2rem] px-4 py-5 border-4 border-[#e9ecef]'>Name</th>
                                <th className='text-center text-[2rem] px-4 py-5 border-4 border-[#e9ecef]'>Department</th>
                                <th className='text-center text-[2rem] px-4 py-5 border-4 border-[#e9ecef]'>Batch</th>
                                <th className='text-center text-[2rem] px-4 py-5 border-4 border-[#e9ecef]'>ClubName</th>
                                <th className='text-center text-[2rem] px-4 py-5 border-4 border-[#e9ecef]'>Role</th>
                            </tr>
                        </thead>
                        <tbody className='text-black '>
                            {
                                members.map((member) => {
                                    return <MembersCard key={member.id} member={member}></MembersCard>
                                })
                            }
                        </tbody>
                    </table>
                </div>

                <div className='flex items-center justify-center mb-10'>
                    <div className="btn-group btn-success">
                        <button className="btn btn-success" onClick={() => { page === 1 ? setPage(1) : setPage(page - 1); }} disable={page === 1}>«</button>
                        <button className="btn ">{page}</button>
                        <button className="btn btn-success" onClick={() => { page === Math.round(1000 / limit) ? setPage(Math.round(1000 / limit)) : setPage(page + 1); }} disable={Math.round(1000 / limit)}>»</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Members