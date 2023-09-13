import React from 'react'
import { useLoaderData } from 'react-router-dom'
import PageBanner from '../../Shared/PageBanner/PageBanner';

const NewsDetails = () => {
    const newsData = useLoaderData();
    const { _id, article_title, article_date,article_content, article_image, article_author, article_category, article_summary } = newsData;
    // console.log(newsData);
    return (
        <div>
            <PageBanner />
            <div className='bg-[#ecf1f5] font-roboto'>
                <div className=' mx-auto flex justify-center'>

                    <div>
                        <div className='mt-20 flex items-center '>
                            <img src={article_image} alt="" />
                        </div>
                        <div className='px-3 py-4 bg-white'>
                            <h1 className='text-[1.6rem] mb-[0.5rem] font-semibold'>{article_title}</h1>
                            <i><p className='text-2xl mb-5'><span>Date</span>:{article_date} / {article_author}</p></i>
                           
                        </div>
                        <div className='border-b-2 border-black'></div>
                        <div>
                            <p className='text-ellipsis overflow-hidden'>
                                {article_content}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NewsDetails