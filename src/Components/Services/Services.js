import React from 'react'
import './services.css'

const Services = () => {

    const serviceList = [
        {
            id: 1,
            logo: "fas fa-lightbulb",
            title: "Strategy",
            description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic." 
        },
        {
            id: 1,
            logo: "fas fa-laptop",
            title: "Design",
            description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic." 
        },
        {
            id: 1,
            logo: "fas fa-code",
            title: "Development",
            description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic." 
        },
        {
            id: 1,
            logo: "fas fa-question",
            title: "Help & Support",
            description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic." 
        }
    ];

    return (
        
        <>
            
            <section data-aos="zoom-in-up" id='services'>
                <div className='work-container container'>
                    <h1 className='display-6 main-heading text-center'>Our Services</h1>

                    <div className='row'>

                        {
                            serviceList.map((service) => {

                                return(
                                    <>
                                            <div className='col-12 col-lg-3 text-center work-container-subdiv' key={service.id}>
                                                <i className={`logo-style hover-logo ${service.logo}`}></i>
                                                <h2 className='sub-heading'>{service.title}</h2>
                                                <p className='main-hero-para w-100'>{service.description}</p>
                                            </div>
                                    </>
                                )
                            })
                        }

                        
                    </div>

                </div>
            </section>
        </>
    )
}

export default Services
