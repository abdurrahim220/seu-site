import React from 'react'

const Responsibility = () => {

    const responsibilities =
        [
            {
                "id": 1,
                "title": "Scholarship",
                "image": "https://codeboxr.net/themedemo/unialumni/html/assets/images/responsibility/01.png",
                "description": "Building thinking about your requirements and the latest trends in our marketplace area."
            },
            {
                "id": 2,
                "title": "Help Current Students",
                "image": "https://codeboxr.net/themedemo/unialumni/html/assets/images/responsibility/02.png",
                "description": "Building thinking about your requirements and the latest trends in our marketplace area."
            },
            {
                "id": 3,
                "title": "Help Our University",
                "image": "https://codeboxr.net/themedemo/unialumni/html/assets/images/responsibility/03.png",
                "description": "Building thinking about your requirements and the latest trends in our marketplace area."
            },
            {
                "id": 4,
                "title": "Build Our Community",
                "image": "https://codeboxr.net/themedemo/unialumni/html/assets/images/responsibility/04.png",
                "description": "Building thinking about your requirements and the latest trends in our marketplace area."
            }
        ]




    return (
        <div

            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-delay="30"
            data-aos-duration="1000"

            className='bg-[#ECF1F5]  font-prompt'>

            <div className='flex justify-center'
                data-aos="zoom-out-up"
                data-aos-delay="50"
                data-aos-duration="1500"
            >
                <h1 className='mt-24 mb-8 loading-[100%] text-black lg:text-[3rem] text-[1.8rem] font-bold'> Our Responsibility</h1>
            </div>


            <div className='grid grid-cols-1 gap-2 px-10 container md:grid-cols-2  lg:grid-cols-4 justify-items-center mx-auto'>

                {
                    responsibilities.map(data => {
                        return <div className="card w-96 mb-10 transition-transform duration-300 transform-gpu hover:-translate-y-1">
                            <figure className="px-10 pt-10"
                                data-aos="zoom-in"
                                data-aos-duration="1850"
                            >
                                <img src={data.image} alt="image" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center"
                                data-aos="fade-up"
                                data-aos-duration="1800"
                            >
                                <h2 className="card-title text-2xl hover:text-[#3b60c9]">{data.title}</h2>
                                <p>{data.description}</p>
                            </div>
                        </div>
                    })
                }

            </div>

        </div>
    )
}

export default Responsibility