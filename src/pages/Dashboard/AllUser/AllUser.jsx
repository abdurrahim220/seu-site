import React, { useEffect, useState } from 'react'
import useMembers from '../../../hooks/useMembers'
import AllUserTable from './AllUserTable'

import Swal from 'sweetalert2'

const AllUser = () => {

  const [members, setLoading, setMembers] = useMembers()

  const [searchText, setSearchText] = useState("")
  // console.log(members)

  const handleDelete = (member) => {
    console.log(member);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/deleteMember/${member._id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              setLoading(false)
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
      }
    })
  }
  const handleSearchText = () => {
    useEffect((
      fetch(`http://localhost:5000/members/${searchText}`)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setMembers(data);
        })
    ), [])
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      return setSearchText(e.target.value)
      // Perform your search operation here using the searchText state.
      console.log('Search for:', searchText);
      // You can call your search function or API request here.
    }
  };


  return (
    <div className='bg-white'>

      <div className='flex items-center justify-start mt-2 mb-2'>
        <input type="text" onChange={(e) => setSearchText(e.target.value)} className='border-2 border-[#3b60c9] px-5 py-2' name="" id="" placeholder='Type Text Here' />
        <label htmlFor="">
          <button onClick={handleSearchText} className='px-5 py-2 bg-[#3b60c9] text-white text-2xl font-bold'>Search</button>
        </label>
      </div>

      <div className='border max-w-screen-md	'>
        <div className="overflow-x-auto">
          <table className="table">

            <thead className='bg-[#F9FAFB]'>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th>Action</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {members.map((member) => {
                return <AllUserTable key={member._id} member={member} handleDelete={handleDelete}></AllUserTable>
              })}

            </tbody>



            <div className='grid justify-end'>
              <p >Name</p>
            </div>

          </table>
        </div>

      </div>
    </div>
  )
}

export default AllUser