import React, { useEffect, useState } from 'react'

const useAndroidFetch = () => {

    const [androids, setAndroids] = useState([]);
    const [loading, setLoading] = useState(true)
   

    useEffect(() => {
        fetch('http://localhost:5000/android').
            then(res => res.json())
            .then(data => {
                setAndroids(data)
                // console.log(data)
                setLoading(false);
            })
    }, [loading])
    return [androids,setLoading]
}

export default useAndroidFetch