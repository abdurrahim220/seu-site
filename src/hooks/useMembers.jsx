import React, { useEffect, useState } from 'react'

const useMembers = () => {
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:5000/members')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setMembers(data);               
            })
    }, [loading]);
    return [members, setLoading,setMembers];
}

export default useMembers