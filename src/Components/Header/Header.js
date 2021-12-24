import React from 'react'
import './header.css'

const Header = () => {
    return (
        
        <>
            <header>

                <section className='container main-hero-container'>

                {/* Header Left Side */}
                    <div className='row'>
                        <div className='col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start'>
                                <h1 className='display-6' data-aos="fade-up-right">
                                    <strong>AWS, Azure, GCP</strong> Cloud Architects with vast experience in designing IT infrastructure and Cloud Solutions.
                                </h1>
                               

                                <p className='main-hero-para' data-aos="fade-up-right">
                                    Kickstart your career with us!
                                </p>

                                <button className='header-btn' data-aos="fade-up-right"> Get in touch</button>

                                

                                
                        </div>
                        {/* Header Left Side */}

                        {/* Header Right Side */}

                            <div className='col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-hero-image'>
                                <img src="./images/h.svg" alt="Header" className='img-fluid' data-aos="fade-up-left" />
                            </div>


                        {/* Header Right Side */}
                    </div>

                </section>
            </header>
        </>
    )
}

export default Header
