import React from 'react'
import PageBanner from '../Shared/PageBanner/PageBanner'

const Contest = () => {
    const img = 'https://i.ibb.co/h8rNnZV/markus-spiske-hv-Sr-CVec-VI-unsplash.jpg'
    return (
        <div>
            <PageBanner img={img} title={"Programming Contest Arena"} description={"We love Programming"} />
            <div>
                <div className="bg-gray-100 min-h-screen flex items-center justify-center">
                    <div className="bg-white p-8 rounded-lg shadow-md w-96">
                        <h1 className="text-2xl font-semibold mb-4">Programming Contest</h1>
                        <p className="text-gray-600 mb-6">Join our exciting programming contest and showcase your coding skills!</p>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input type="text" className="w-full border rounded-md p-2" placeholder="John Doe" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input type="email" className="w-full border rounded-md p-2" placeholder="john@example.com" />
                        </div>

                        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Register</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contest