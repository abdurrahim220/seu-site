import React, { useRef } from 'react'
import PageBanner from '../Shared/PageBanner/PageBanner'
import { Helmet } from 'react-helmet-async'
import emailjs from '@emailjs/browser';
import PageTransition from '../../hooks/PageTransition';
import Swal from 'sweetalert2'

const Contact = () => {
    const cover = 'https://i.ibb.co/1LWMyKw/miles-burke-idhx-MOCDSk-unsplash.jpg'
    const form = useRef();

    // console.log(form)
    const sendEmail = (event) => {
        // console.log("Rahim")
        event.preventDefault();

        emailjs.sendForm('service_8o3ld1j', 'template_8i0xokp', form.current, 'UkR2sQtv2xvJgh4RM')
            .then((result) => {
                // console.log(result);
                if (result.text === 'OK') {
                    Swal.fire(
                        'Good job!',
                        'Your Email Received!',
                        'success'
                    )
                }
            }, (error) => {
                console.log(error.text);
            });
    };
    
    return (
        <PageTransition>
            <>
                <Helmet>
                    <title>SEU || contact</title>
                </Helmet>
                <div>
                    <PageBanner img={cover} title={"Feel Free To Contact Us"} description={"We Southeast University Club Provide The Best services"} />
                </div>

                <div className="flex justify-center my-16 items-center lg:w-screen font-poppins lg:h-screen bg-white">

                    <div className="container mx-auto my-4 px-4 lg:px-20">

                        <form
                            data-aos="fade-up"
                            data-aos-duration="3000"
                            ref={form} onSubmit={sendEmail} className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                            <div className="flex">
                                <h1 className="font-bold uppercase lg:text-5xl text-2xl">Send us a message</h1>
                            </div>
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                                <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="text" name='from_name' placeholder="Full Name*" required/>

                                <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="email" name='from_email' placeholder="Email*" required/>
                                <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="text" name='from_subject' placeholder="Subject*" required/>
                            </div>
                            <div className="my-4">
                                <textarea placeholder="Message*" name='message' className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                            </div>



                            <div className="my-2 w-1/2 lg:w-1/4">
                                <input className="uppercase text-sm font-bold tracking-wide bg-blue-900 hover:bg-slate-500 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline" type="submit" value="Send Message" />
                            </div>
                        </form>

                        <div
                            data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                            className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-blue-900 rounded-2xl">
                            <div className="flex flex-col text-white">
                                <h1 className="font-bold uppercase text-4xl my-4">Drop in our office</h1>
                                <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                    tincidunt arcu diam,
                                    eu feugiat felis fermentum id. Curabitur vitae nibh viverra, auctor turpis sed, scelerisque ex.
                                </p>

                                <div className="flex my-4 w-2/3 lg:w-1/2">
                                    <div className="flex flex-col">
                                        <i className="fas fa-map-marker-alt pt-2 pr-2" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h2 className="text-2xl">Main Office</h2>
                                        <p className="text-gray-400">5555 Tailwind RD, Pleasant Grove, UT 73533</p>
                                    </div>
                                </div>

                                <div className="flex my-4 w-2/3 lg:w-1/2">
                                    <div className="flex flex-col">
                                        <i className="fas fa-phone-alt pt-2 pr-2" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h2 className="text-2xl">Call Us</h2>
                                        <p className="text-gray-400">Tel: xxx-xxx-xxx</p>
                                        <p className="text-gray-400">Fax: xxx-xxx-xxx</p>
                                    </div>
                                </div>

                                <div className="flex my-4 w-2/3 lg:w-1/2">
                                    <a href="https://www.facebook.com/ENLIGHTENEERING/" target="_blank" rel="noreferrer" className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1">
                                        <i className="fab fa-facebook-f text-blue-900" />
                                    </a>
                                    <a href="https://www.linkedin.com/company/enlighteneering-inc-" target="_blank" rel="noreferrer" className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1">
                                        <i className="fab fa-linkedin-in text-blue-900" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </></PageTransition>
    )
}

export default Contact