import React from 'react'

const NewsCard = ({ data }) => {
    const { _id, article_title, article_date, article_author, article_category, article_summary } = data;
    return (
        <div className="card w-96 bg-base-100 transition-transform duration-300 transform-gpu hover:-translate-y-1">
            <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="img" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {article_title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>Writer Name :{article_author} </p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{article_date}</div>
                    <div className="badge badge-outline">{article_category}</div>
                </div>
            </div>
        </div>
    )
}

export default NewsCard