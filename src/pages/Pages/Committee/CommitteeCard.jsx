import React from 'react'

const CommitteeCard = ({ item }) => {

    const { role, memberName, socialLink, picture, email, phone, joinDate } = item;
    return (
        <div className='group relative justify-items-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow'>
            <div className="h-96 w-72">
                <img className='h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-300' src={picture} alt="" />
            </div>
            <div className='absolute inset-0 bg-gradient-to-b from-current via-transparent to-black group-hover:from-black/70 group-hover:via-black-50'>
                <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-300'>
                    <h1 className='text-3xl font-bold text-white'>{role}</h1>
                    <p className='text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 duration-300'>{memberName}</p>

                </div>
            </div>


        </div>
    )
}

export default CommitteeCard