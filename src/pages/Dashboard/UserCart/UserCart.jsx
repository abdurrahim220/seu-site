import React from 'react'
import useAndroid from '../../../hooks/useAndroid'
import { FaTrashAlt } from 'react-icons/fa'
import { LiaAmazonPay } from 'react-icons/lia'
import Swal from 'sweetalert2'

const UserCart = () => {
  const [carts, refetch] = useAndroid()
  const total = (carts.reduce((sum, item) => item.price + sum, 0))
  // console.log(total)

  const handleDelete = (item) => {
    // console.log(item);
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
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            // console.log(data);
            if (data.deletedCount > 0) {
              refetch();
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


  const handlePay = (item) => {

    // console.log(item)
   

    fetch(`http://localhost:5000/order`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.replace(data.url)
        console.log(data)
      });

  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Course Name</th>
            <th>Price</th>
            <th>Course Code</th>
            <th></th>
            <th>Pay</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}

          {carts.map((item, index) =>
            <tr key={item._id}>
              <th>
                <label>
                  {index + 1}
                </label>
              </th>

              <td>
                {item.courseName}
              </td>
              <td>{item.price}</td>
              <td>{item.courseCode}</td>
              <th>

                <button onClick={() => handleDelete(item)} className="btn btn-ghost btn-sm text-white bg-red-500"><FaTrashAlt></FaTrashAlt></button>

              </th>
              <th>
                <button onClick={()=>handlePay(item)} className="btn btn-ghost btn-sm text-white bg-red-500"><LiaAmazonPay/></button>
              </th>
            </tr>
          )}

        </tbody>
      </table>
    </div>
  )
}

export default UserCart