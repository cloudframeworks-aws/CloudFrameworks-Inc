import React from 'react'
import './about.css'

const About = () => {

    const steps = [
        {
            "id": 1,
            "step": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?Lorem ipsum, Etquia quis?Lorem ipsum,  Etquia quis?"
        },
        {
            "id": 2,
            "step": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?Lorem ipsum, Etquia quis?Lorem ipsum,  Etquia quis?"
        },
        {
            "id": 3,
            "step": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?Lorem ipsum, Etquia quis?Lorem ipsum,  Etquia quis?"
        }
    ];


    return (
        
        <>
            {/* Section 1 */}
            <section id='about' className='common-section our-services'>

                <div className='container'>
                    <div className='row'>


                        <div className='col-12 col-lg-6 text-center our-services-left' data-aos="fade-right">

                            <img src='./images/about1.svg' className='img-fluid' alt=''></img>
                        </div>

                        <div className='col-12 col-lg-6 our-services-description' data-aos="fade-left">
                            <h1 className='display-6 text-center mt-2'>What we do?</h1>

                            {steps.map((step) => {

                                return(
                                    <>
                                        <div className='row our-services-info d-flex justify-content-center' key={step.id}>

                                            <div className='col-1 our-services-number'><i className="fas fa-arrow-right"></i></div>
                                            <div className='col-10 our-services-data'>
                                                <p>{step.step}</p>
                                            </div>

                                            </div>
                                    </>
                                )
                            })}
                            
                            <div className='text-center div-btn'><button className='header-btn'>Contact Us</button></div>

                        </div>

                    </div>
                </div>

            </section>

            {/* Section 2 */}
            <section className='common-section our-services'>

                <div className='container'>
                    <div className='row'>


                        

                        <div className='col-12 col-lg-6 our-services-description' data-aos="fade-right">
                            <h1 className='display-6 text-center mt-2'>Why you should learn Cloud?</h1>

                            {steps.map((step) => {

                                return(
                                    <>
                                        <div className='row our-services-info d-flex justify-content-center' key={step.id}>

                                            <div className='col-1 our-services-number'><i className="fas fa-arrow-right"></i></div>
                                            <div className='col-10 our-services-data'>
                                                <p>{step.step}</p>
                                            </div>

                                            </div>
                                    </>
                                )
                            })}

                            <div className='text-center'><button className='header-btn div-btn'>Explore our Courses</button></div>

                            
                            
                            

                        </div>

                        <div className='col-12 col-lg-6 text-center our-services-left' data-aos="fade-left">

                            <img src='./images/cloud.svg' className='img-fluid' alt=''></img>
                        </div>

                    </div>
                </div>

            </section>
        </>
    )
}

export default About
