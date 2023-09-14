import React, { useEffect, useState } from 'react'

const useGallery = () => {
    const [galleries, setGalleries] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch("http://localhost:5000/gallery")
            .then((res) => res.json())
            .then((data) => {
                setGalleries(data);
                setLoading(false)
            });
    }, []);
    return [galleries,loading]
}

export default useGallery