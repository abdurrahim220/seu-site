import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard';

const News = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/news`).then(res => res.json()).then(data => {
            setNews(data);
        })
    }, [])


    return (
        <div className='bg-[#ecf1f5]'>
            <div className='my-10'>
                <h1 className='text-center'>News</h1>
                <div className='mx-auto grid grid-cols-1 container md:grid-cols-2 gap-3 justify-items-center lg:grid-cols-3'>
                    {
                        news.slice(0,3).map(data => {
                         return   <NewsCard key={data.id} data={data}></NewsCard>
                        })
                    }
                </div>                
            </div>
        </div>
    )
}

export default News