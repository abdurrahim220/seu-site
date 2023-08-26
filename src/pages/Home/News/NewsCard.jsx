import React from 'react'
import { Link } from 'react-router-dom';

const NewsCard = ({ data }) => {
    const { _id, article_title, article_image, article_summary } = data;
    return (
        <div className=" mb-16 w-96 bg-base-100 transition-transform duration-300 transform-gpu hover:-translate-y-1">
            <figure><img src={article_image} alt="img" /></figure>
            <div className="card-body">
                <h2 className="card-title">{article_title}</h2>
                <p>{article_summary} </p>
                <Link to={`/newsDetails/${_id}`}><button className='my-2 text-[1.4rem] hover:bg-[] bg-[#3b60c9] py-2 px-5'>More</button></Link>
            </div>
        </div>
    )
}

export default NewsCard