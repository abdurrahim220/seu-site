import React from 'react'

const Responsibility = () => {
    return (
        <div className='bg-[#ECF1F5] font-serif'>

            <div className='flex justify-center'>
                <h1 className='mt-24 mb-8 loading-[100%] text-black text-[3rem] font-bold'> Our Responsibility</h1>
            </div>


            <div className='grid grid-cols-1 gap-2 px-10 container md:grid-cols-2  lg:grid-cols-4 justify-items-center mx-auto'>

                <div className="card w-96 transition-transform duration-300 transform-gpu hover:-translate-y-1">
                    <figure className="px-10 pt-10">
                        <img src="https://codeboxr.net/themedemo/unialumni/html/assets/images/responsibility/01.png" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl hover:text-[#3b60c9]">Scholarship</h2>
                        <p>De create building thinking about your requirment and latest treand on our marketplace area</p>
                    </div>
                </div>


                <div className="card w-96 transition-transform duration-300 transform-gpu hover:-translate-y-1">
                    <figure className="px-10 pt-10">
                        <img src="https://codeboxr.net/themedemo/unialumni/html/assets/images/responsibility/02.png" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl hover:text-[#3b60c9]">Help Current Students
                        </h2>
                        <p>De create building thinking about your requirment and latest treand on our marketplace area</p>
                    </div>
                </div>

                <div className="card w-96 transition-transform duration-300 transform-gpu hover:-translate-y-1">
                    <figure className="px-10 pt-10">
                        <img src="https://codeboxr.net/themedemo/unialumni/html/assets/images/responsibility/03.png" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl hover:text-[#3b60c9]">Help Our University
                        </h2>
                        <p>De create building thinking about your requirment and latest treand on our marketplace area</p>
                    </div>
                </div>
                <div className="card w-96 transition-transform duration-300 transform-gpu hover:-translate-y-1">
                    <figure className="px-10 pt-10">
                        <img src="https://codeboxr.net/themedemo/unialumni/html/assets/images/responsibility/04.png" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl hover:text-[#3b60c9]">Build Our Community
                        </h2>
                        <p>De create building thinking about your requirment and latest treand on our marketplace area</p>
                    </div>
                </div>
                <div className='mb-16'></div>

            </div>

        </div>
    )
}

export default Responsibility