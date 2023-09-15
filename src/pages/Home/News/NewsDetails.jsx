import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import PageBanner from '../../Shared/PageBanner/PageBanner';
import { Helmet } from 'react-helmet-async';
import { FaFacebookSquare, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { BiComment, BiSolidLike } from 'react-icons/bi'
// import {FaXTwitter,FaLinkedinIn} from 'react-icons/fa'

const NewsDetails = () => {
    const newsData = useLoaderData();
    const { _id, article_title, article_date, article_content, article_image, article_author, article_category, article_summary } = newsData;
    // console.log(newsData);
    return (
        <div className='bg-gray-200'>
            <PageBanner />
            <Helmet>
                <title>SEU || News</title>
            </Helmet>

            <div className='py-16 container  mx-auto'>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 px-5 lg:px-10 font-poppins lg:gap-8">

                    <div className="h-screen lg:order-1 order-2 rounded-lg lg:col-span-2">
                        <div className=' font-roboto bg-white'>
                            <div className=' mx-auto flex justify-center'>
                                <div>
                                    <div className=''>
                                        <img src={article_image} alt="" />
                                    </div>
                                    <div className='px-3 py-4 bg-white'>
                                        <h1 className='text-[1.6rem] mb-[0.5rem] font-semibold'>{article_title}</h1>
                                        <i><p className='text-2xl mb-5'><span>Date</span>:{article_date} / {article_author}</p></i>

                                    </div>
                                    <div className='divider'></div>
                                    <div>
                                        <p className=''>
                                            {article_content}
                                        </p>
                                    </div>
                                    <div className="divider"></div>
                                    <div className='py-5 px-5 bg-white text-[#6a78a1]'>
                                        <div className="relative text-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700">
                                                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                            </svg>
                                            <p className="px-6 py-1 text-lg italic">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700">
                                                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className='bg-[#3b60c9] lg:px-10 px-5 py-5 flex justify-between'>
                                        <div className='flex gap-5'>
                                            <p className='text-2xl'>Share</p>
                                            <FaFacebookSquare size={30} />
                                            <FaLinkedinIn size={30} />
                                            <FaTwitter size={30} />

                                        </div>
                                        <div className='flex gap-5'>
                                            <BiSolidLike size={30} />
                                            <BiComment size={30} />
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="h-screen rounded-l lg:order-2 order-1">
                        <div className="card w-96 bg-base-100 ">
                            <div className="card-body">
                                <div className="relative py-5">
                                    <label htmlFor="Search" className="sr-only"> Search </label>

                                    <input
                                        type="text"
                                        id="Search"
                                        placeholder="Search for..."
                                        className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
                                    />

                                    <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                                        <button type="button" className="text-gray-600 hover:text-gray-700">
                                            <span className="sr-only">Search</span>

                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="h-4 w-4"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                                />
                                            </svg>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="card w-96 bg-base-100 my-10">
                            <div className="card-body">
                                <h2 className="card-title">Categories</h2>
                                <ul className="space-y-1">
                                    <li>
                                        <Link to=""className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
                                            All
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            to=""
                                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                        >
                                          Education
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to=""
                                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                        >
                                        Tech
                                        </Link>
                                    </li>

                                    

                                </ul>

                            </div>
                        </div>

                        <div className="card w-96 bg-base-100 my-10">
                            <div className="card-body">
                                <h2 className="card-title">Popular Tags</h2>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsDetails