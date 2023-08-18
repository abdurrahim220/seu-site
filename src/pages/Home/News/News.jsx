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
        <>

            <div className='mx-auto bg-[#ecf1f5]'>
                <div className=''>
                    <div className='mt-10 mb-8'>

                        <p className='flex justify-center text-[#131c33] text-[3.6rem] leading-[100%] font-bold '>Recent News</p>
                    </div>

                    <div className='mx-auto grid grid-cols-1 container md:grid-cols-2 gap- justify-items-center lg:grid-cols-3'>
                        {
                            news.slice(0, 3).map(data => {
                                return <NewsCard key={data.id} data={data}></NewsCard>
                            })
                        }
                    </div>
                </div>
            </div> </>
    )
}

export default News