import React from 'react'
import PageTransition from '../../hooks/PageTransition'
import { Helmet } from 'react-helmet-async'
import PageBanner from '../Shared/PageBanner/PageBanner'
import { Link } from 'react-router-dom'
import useGallery from '../../hooks/useGallery'

const GalleryPage = () => {
    const [galleries] = useGallery()
    return (
        <PageTransition>
            <PageBanner />
            <Helmet>
                <title>SEU || Gallery</title>
            </Helmet>
            <div className='max-w-md py-10 mx-auto' data-aos="fade-up"
                data-aos-anchor-placement="center-center">
                <div className="sm:hidden">
                    <label htmlFor="Tab" className="sr-only">Tab</label>

                    <select id="Tab" className="w-full rounded-md ">
                        <option>Settings</option>
                        <option>Messages</option>
                        <option>Archive</option>
                        <option select>Notifications</option>
                    </select>
                </div>

                <div className="hidden sm:block container mx-auto">
                    <div className="border-b border-gray-200">
                        <nav className="-mb-px flex gap-6" aria-label="Tabs">
                            <a
                                href="#"
                                className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                            >
                                All
                            </a>

                            <a
                                href="#"
                                className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                            >
                                Seminar
                            </a>

                            <a
                                href="#"
                                className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                            >
                                Events
                            </a>

                            <a
                                href="#"
                                className="shrink-0 border-b-2 border-sky-500 px-1 pb-4 text-sm font-medium text-sky-600"
                                aria-current="page"

                            >
                                Picnic
                            </a>
                        </nav>
                    </div>
                </div>
            </div>

            <div className='py-16 bg-sky-50 font-roboto'>
                <div className='max-w-screen-lg mx-auto'
                    data-aos="fade-up-right"
                >
                    <div className='flex py-2 justify-between'>
                        <p className='grid divide-y-2 lg:text-5xl'>Our last Meetup in 2018</p>
                        <Link to="/gallery" className='btn btn-success'>View Album</Link>
                    </div>
                    <p className='py-2'>Etiam vitae tortor. Curabitur nisi. In hac habitasse platea dictumst. Praesent ac massa at ligula laoreet iaculis. Praesent ac massa at ligula laoreet iaculis. sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. Nullam quis ante. Curabitur vestibulum.</p>

                    <div class="grid grid-cols-2 lg:grid-cols-4 py-10 gap-4"
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"

                    >
                        {
                            galleries.slice(0, 8).map(data => {
                                return <div className='grid gap-4'>
                                    <div>
                                        <img className='h-auto max-w-full rounded-lg' src={data.image_url} alt="" srcset="" />
                                    </div>
                                </div>

                            })
                        }
                    </div>

                </div>
                <div className='max-w-screen-lg mx-auto py-10'
                    data-aos="fade-up-left"
                >
                    <div className='flex py-2 justify-between'>
                        <p className='grid divide-y-2 lg:text-5xl'>Our last Meetup in 2023</p>
                        <Link to="/gallery" className='btn btn-success'>View Album</Link>
                    </div>
                    <p className='py-2'>Etiam vitae tortor. Curabitur nisi. In hac habitasse platea dictumst. Praesent ac massa at ligula laoreet iaculis. Praesent ac massa at ligula laoreet iaculis. sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. Nullam quis ante. Curabitur vestibulum.</p>

                    <div class="grid grid-cols-2 lg:grid-cols-4 py-10 gap-4"

                        data-aos="fade-left"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="300"
                    >
                        {
                            galleries.slice(0, 8).map(data => {
                                return <div className='grid gap-4'>
                                    <div>
                                        <img className='h-auto max-w-full rounded-lg' src={data.image_url} alt="" srcset="" />
                                    </div>
                                </div>

                            })
                        }
                    </div>

                </div>

            </div>
        </PageTransition>
    )
}

export default GalleryPage