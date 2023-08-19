import React, { useEffect, useState } from 'react'

const useCommittee = () => {
    const [committee, setCommittee] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:5000/authority')
            .then(res => res.json())
            .then(data => {
                setCommittee(data);
                setLoading(false)
            })
    }, []);
    return [committee, loading];
}

export default useCommittee