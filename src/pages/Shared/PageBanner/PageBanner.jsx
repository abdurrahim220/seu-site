import React from 'react'

const PageBanner = () => {
    return (
        <div className="hero h-[400px]" style={{ backgroundImage: 'url(https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/308468636_507353204729951_4755873565459664359_n.png?stp=dst-png_s960x960&_nc_cat=109&cb=99be929b-59f725be&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeGsZ1AxvrfsSBmW8GOjsDAn74fj8u9z9nzvh-Py73P2fJdW_Mf1rSDb1ASPbBeCRNGfjBMHsEdrsow901ZYa7Zv&_nc_ohc=sqmnBUgpar4AX_-qNd7&_nc_ht=scontent.fdac24-4.fna&oh=00_AfAzzcpuxRcNblMpxn9yQ93iDT_6SpudZtFXEYFcFmEfJw&oe=64CAB588)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default PageBanner