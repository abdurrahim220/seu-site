import React from 'react'

const AllUserTable = ({member,handleDelete}) => {
  const { name, image, role, department, clubName, batch } = member;
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
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
      <td>{clubName}</td>
      <td>{batch}</td>
      <td>role</td>
      <th>
        <button onClick={()=>handleDelete(member)} className="btn btn-ghost btn-xs">delete</button>
      </th>
    </tr>
  )
}

export default AllUserTable