import React, { useEffect, useState } from 'react'

const useCommittee = () => {
    const [committee, setCommittee] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://server2-psi.vercel.app/authority')
            .then(res => res.json())
            .then(data => {
                setCommittee(data);
                setLoading(false)
            })
    }, []);
    return [committee, loading];
}

export default useCommittee