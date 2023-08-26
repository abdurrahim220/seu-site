import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard';

const News = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch(`https://server2-abdurrahim220.vercel.app/news`).then(res => res.json()).then(data => {
            setNews(data);
        })
    }, [])


    return (
        <>
            <div className='mx-auto bg-[#ecf1f5]'>

                <div className='flex justify-center '>
                    <p className='mt-24 mb-16 text-[#131c33] text-[3.6rem] leading-[100%] font-bold '>Recent News</p>
                </div>

                <div className='mx-auto grid grid-cols-1 container md:grid-cols-2 gap-2 justify-items-center lg:grid-cols-3'>
                    {
                        news.slice(0, 3).map(data => {
                            return <NewsCard key={data.id} data={data}></NewsCard>
                        })
                    }
                </div>

            </div>

        </>
    )
}

export default News