import React from 'react'

const MembersCard = ({ member }) => {
    const { name, image, role, department, clubName, batch } = member;
    return (


        <tr className='border-4 text-center text-[#3a3b3c] font-bold border-[#e9ecef]'>

            <td className='border-4 bg-[#ecf1f5] border-[#e9ecef]'>
                <div className="flex gap-2 items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle border-2 border-[#3b60c9] w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>

                    </div>
                </div>
            </td>
            <td className='border-4 border-[#e9ecef]'>
                {department}
            </td>
            <td className='bg-[#ecf1f5] border-4 text-[#3a3b3c] border-[#e9ecef]'>{batch}</td>
            <td className='border-4 border-[#e9ecef]'>{clubName}</td>
            <td className='bg-[#ecf1f5] border-4 border-[#e9ecef]'>{role}</td>
        </tr>


    )
}

export default MembersCard