import React from 'react'
import './contact.css'

const Contact = () => {
    return (
        
        <>
            <section className='contact-section' id='contact'>
                <div className='container'>

                    <div className='row'>
                        <div className='col-12 col-lg-10 mx-auto'>

                                <div className='row'>
                                    {/* Contact Left Side Image */}
                                    <div className='contact-left col-12 col-lg-5'>
                                        {/*<h1 className='display-6 text-center mb-5'>Connect with us</h1>*/}
                                        <img src='./images/contact.svg' alt='contact' className='img-fluid' data-aos="fade-right"></img>
                                    </div>

                                    {/*Contact Form Right Side */}
                                    <div className='contact-right col-12 col-lg-7' data-aos="fade-left">
                                    <h1 className='display-6 text-center mb-5'>Let's get in touch!</h1>
                                        <form>
                                            
                                                <div className='row'>

                                                    <div className='col-12 col-lg-6 contact'>
                                                        <input type='text' className='form-control' name='firstname' placeholder='Your first name' />
                                                    </div>

                                                    <div className='col-12 col-lg-6 contact'>
                                                        <input type='text' className='form-control' name='lastname' placeholder='Your last name' />
                                                    </div>

                                                    <div className='col-12 col-lg-6 contact'>
                                                        <input type='text' className='form-control' name='phone' placeholder='Your phone number' />
                                                    </div>

                                                    <div className='col-12 col-lg-6 contact'>
                                                        <input type='email' className='form-control' name='email' placeholder='Your email' />
                                                    </div>

                                                </div>

                                                <div className='row'>
                                                    <div className='col-12'>
                                                        <textarea class='form-control contact' name='message' placeholder='Enter your message here...' rows='3'></textarea>

                                                        <div className='col-12 text-center'>
                                                        <button type='submit' className='submit-btn w-100'>SEND</button>
                                                    </div>
                                                    </div>
                                                </div>

                                               
                                           
                                        </form>
                                    </div>

                                </div>

                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Contact
