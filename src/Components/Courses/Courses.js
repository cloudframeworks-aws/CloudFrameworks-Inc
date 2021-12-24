import React from 'react'
import "./courses.css"

const Courses = () => {


    const courseList = [
        
        {
            "id": 1,
            "name": "AWS Certified Cloud Practitioner",
            "logo": "fab fa-aws",
            "description": "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
        },
        {
            "id": 2,
            "name": "AWS Certified Solutions Architect",
            "logo": "fab fa-aws",
            "description": "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
        },
        {
            "id": 3,
            "name": "Google Associate Cloud Engineer Certification",
            "logo": "fab fa-google",
            "description": "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
        },
        {  
            "id": 4,
            "name": "Google Professional Cloud Architect Certification",
            "logo": "fab fa-google",
            "description": "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
        },
        {
            "id": 5,
            "name": "Google Professional Cloud Developer Certification",
            "logo": "fab fa-google",
            "description": "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
        },
        {
            "id": 6,
            "name": "Google Professional Cloud Data Engineer Certification",
            "logo": "fab fa-google",
            "description": "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
        }
    ];

    return (

        <>
            <section id='courses' className='service-main-container'>
                <div className='container service-container'>
                    <h1 className='display-6 main-heading text-center'>Browse our Courses</h1>

                    <div className='row'>
                        {
                            courseList.map((course) => {

                                return(
                                    <>
                                    <div className='col-12 col-lg-4 col-xxl-4 work-container-subdiv subdiv'>

                                        <i className={`logo-style course ${course.logo}` } data-aos="flip-right"></i>
                                        
                                        <h5 className='text-center heading'>AWS Certified Cloud Practitioner</h5>
                                        <p className='text-center desc' style={{"fontWeight":"lighter"}}>
                                            {course.description}
                                        </p>
                                        <div className='text-center'><button className='header-btn'>I'm Interested</button></div>

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

export default Courses
