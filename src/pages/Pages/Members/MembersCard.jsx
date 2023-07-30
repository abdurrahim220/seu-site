import React from 'react'

const MembersCard = ({ member }) => {
    const { name, img, role, department, campus, batch } = member;
    return (
        <tbody>
            {/* row 1 */}
            <tr>

                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={img} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{name}</div>

                        </div>
                    </div>
                </td>
                <td>
                    {department}
                </td>
                <td>{batch}</td>
                <td>{campus}</td>
                <td>{role}</td>
            </tr>

        </tbody>
    )
}

export default MembersCard