import React, { useState } from 'react'
import PageBanner from '../Shared/PageBanner/PageBanner'
import PageTransition from '../../hooks/PageTransition'
import { Helmet } from 'react-helmet-async'
import According from '../Home/Mission/According'
import Lottie from 'lottie-react'
import contest from "../../assets/LottiAnimaton/programming_contest.json";
import { Link } from 'react-router-dom'

const Contest = () => {
    const [open, setOpen] = useState(false);
    const toggle = (index) => {
        if (open === index) {
            return setOpen(null)
        }
        setOpen(index)
    }

    const img = 'https://i.ibb.co/h8rNnZV/markus-spiske-hv-Sr-CVec-VI-unsplash.jpg'
    const questions =
        [
            {
                "question": "Why should I participate in programming contests?",
                "answer": "Participating in programming contests offers numerous benefits. It enhances problem-solving skills, improves algorithmic thinking, and sharpens coding abilities. It provides opportunities to learn new algorithms and data structures. Additionally, it helps in developing a competitive spirit and the ability to work under pressure, which are valuable traits in the tech industry. Programming contests also serve as a platform to showcase your skills to potential employers and connect with like-minded individuals in the programming community."
            },
            {
                "question": "What are some popular programming contests and platforms?",
                "answer": "There are several popular programming contests and online platforms for coding competitions. Some of the well-known ones include Codeforces, AtCoder, TopCoder, LeetCode, CodeChef, and HackerRank. These platforms host a wide range of contests, from beginner to advanced levels, covering various programming languages and problem-solving domains."
            },
            {
                "question": "How can I prepare for programming contests?",
                "answer": "To prepare for programming contests, you can start by practicing coding problems on online platforms. Study algorithms and data structures, as they are essential for solving contest problems efficiently. Participate in contests regularly to gain experience and improve your problem-solving skills. Collaborate with other contestants and learn from their solutions. Additionally, you can join online coding communities and forums to stay updated on contest announcements and discuss strategies with fellow programmers."
            }
        ];

    const problemSolver =
        [
            {
                "name": "Bard",
                "image": "https://shorturl.at/auBMT",
                "total_problem_solve": 100000
            },
            {
                "name": "LaMDA",
                "image": "https://shorturl.at/auBMT",
                "total_problem_solve": 50000
            },
            {
                "name": "PaLM",
                "image": "https://shorturl.at/auBMT",
                "total_problem_solve": 25000
            }
        ]


    return (
        <PageTransition>
            <Helmet>
                <title>Seu || Contest</title>
            </Helmet>
            <div>
                <PageBanner img={img} title={"Programming Contest Arena"} description={"We love Programming"} />

                <section className='pt-28 bg-sky-50 font-poppins'>
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                        <div className="h-auto max-w-screen-lg mx-auto rounded-lg lg:order-1 order-2 lg:col-span-2">
                            <h1 className='text-center lg:text-3xl text-[16px] font-bold pt-8 pb-10'>Some Problem Solver List</h1>

                            <div className="grid pt-16 grid-cols-1 gap-3 md:grid-cols-3">
                                {
                                    problemSolver.map((data) => {
                                        return <div className="card w-80 h-70 mx-auto bg-white  shadow-xl hover:shadow">
                                            <img className="w-32 mx-auto rounded-full -mt-20 border-8 border-white" src={data.image} alt="" />
                                            <div className="text-center mt-2 text-3xl font-medium">{data.name}</div>

                                            <div className="px-6 text-center mt-2 font-light text-sm">
                                                <p>
                                                    Problem Solver
                                                </p>
                                            </div>
                                            <div className="mt-8">
                                                <div className="flex p-4">
                                                    <div className="text-center">
                                                       {data.total_problem_solve} Problem Solve
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    })
                                }

                            </div>
                        </div>

                        <div className="h-auto rounded-lg lg:order-2 order-1">

                            <div className="card w-96 bg-base-100 my-10">
                                <div className="card-body">
                                    <h2 className="card-title">Top Problem Solve Site</h2>
                                    <ul className="space-y-1">
                                        <li>
                                            <Link target="_blank" to="https://codeforces.com/" className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
                                                Codeforces
                                            </Link>
                                        </li>
                                        <li>
                                            <Link target="_blank" to="https://leetcode.com/contest/" className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
                                                LeetCode
                                            </Link>
                                        </li>
                                        <li>
                                            <Link target="_blank" to="https://www.hackerrank.com/domains/tutorials/10-days-of-javascript" className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
                                                HackerRank
                                            </Link>
                                        </li>
                                        <li>
                                            <Link target="_blank" to="https://atcoder.jp/" className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
                                                AtCoder
                                            </Link>
                                        </li>
                                        <li>
                                            <Link target="_blank" to="https://www.topcoder.com/challenges" className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
                                                TopCoder
                                            </Link>
                                        </li>
                                        <li>
                                            <Link target="_blank" to="https://codingcompetitions.withgoogle.com/kickstart" className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
                                                Kick Start by Google
                                            </Link>
                                        </li>
                                        <li>
                                            <Link target="_blank" to="https://www.codechef.com/contests" className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
                                                CodeChef
                                            </Link>
                                        </li>
                                        <li>
                                            <Link target="_blank" to="https://www.hackerearth.com/challenges/" className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
                                                HackerEarth
                                            </Link>
                                        </li>
                                        <li>
                                            <Link target="_blank" to="https://projecteuler.net/" className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
                                                Project Euler
                                            </Link>
                                        </li>
                                        <li>
                                            <Link target="_blank" to="https://uva.onlinejudge.org/" className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
                                                UVa Online Judge
                                            </Link>
                                        </li>

                                    </ul>

                                </div>
                            </div>

                        </div>

                    </div>
                </section>




                <section className='py-5 font-prompt lg:py-10'>
                    <div >
                        <p className='text-center text-[16px] py-2'>How it works</p>
                        <h1 className='font-bold text-2xl py-4 text-center lg:text-5xl'>Frequently Asked Question</h1>
                        <h1 className='font-bold text-2xl py-4 text-center lg:text-4xl'>About Programming contest</h1>
                    </div>
                    <div className='py-10 px-4 lg:px-8 font-roboto mx-auto container lg:flex  gap-3 items-center justify-center'>
                        <div>
                            <Lottie animationData={contest} />;
                        </div>

                        <div className='px-10 lg:max-w-3xl'>
                            {
                                questions.map((data, index) => {
                                    return <According key={index} title={data.question} desc={data.answer} open={index === open} toggle={() => toggle(index)} />
                                })
                            }
                        </div>
                    </div>
                </section>
            </div>




        </PageTransition>
    )
}

export default Contest