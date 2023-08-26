import React, { useEffect, useState } from 'react'
import PageBanner from '../../pages/Shared/PageBanner/PageBanner'
import AndroidCard from './AndroidCard';

const AndroidCommunity = () => {

  const [androids, setAndroids] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/android').
    then(res => res.json())
    .then(data => {
      setAndroids(data)
      console.log(data)
    })
  }, [])

  return (
    <div className='bg-[#f0f5fb]'>
      <PageBanner />
      <div >
        <div className='grid justify-items-center'>
          <h1 className=' mt-32 font-bold text-[2.6rem]'>Choose a topic</h1>
          <p className='text-[#777777] mt-4 mb-3'>Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two
            waters own morning gathered greater shall had behold had seed.</p>
        </div>
        <div className='grid grid-cols-1 container mx-auto justify-center gap-3 md:grid-cols-3 justify-items-center mt-5 px-36'>
          {
            androids.map(data => {
              return <AndroidCard key={data._id} data={data}/>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default AndroidCommunity