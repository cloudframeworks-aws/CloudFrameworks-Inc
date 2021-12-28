import React from 'react'
import './contact.css'
import { useState } from 'react'
import emailjs from 'emailjs-com'
import Modal from './Modal'


const Contact = () => {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [msg, setMsg] = useState("");
    const [show, setShow] = useState(false);
    const handleSubmit = (e) => {

        e.preventDefault();

        if(!fname || !lname || !email || !contact || !msg){

            alert("Please include mandatory fields.");
        }else{

               
            setShow(true);
            const message = {
                "from_name": `${fname} ${lname}`,
                "to_name": "CloudFrameWorks Inc.",
                "email": email,
                "contact": contact,
                "message": msg
            };

            emailjs.send('service_s8uukfa', 'template_voht8ak', message, 'user_udbrYETEdQArEvBvAV5Bw').then((response) => {
                console.log(response.text);
                
            }, (error) => {console.log(error.text)});   

            
        }
        
    }
    

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
                                        <form onSubmit={handleSubmit}>
                                            
                                                <div className='row'>

                                                    <div className='col-12 col-lg-6 contact'>
                                                        <input required type='text' className='form-control' name='firstname' placeholder='Your first name*' onChange={(e) => setFname(e.target.value)} />
                                                    </div>

                                                    <div className='col-12 col-lg-6 contact'>
                                                        <input type='text' className='form-control' name='lastname' placeholder='Your last name' onChange={(e) => setLname(e.target.value)} />
                                                    </div>

                                                    <div className='col-12 col-lg-6 contact'>
                                                        <input required type='text' className='form-control' name='phone' placeholder='Your phone number*' onChange={(e) => setContact(e.target.value)} />
                                                    </div>

                                                    <div className='col-12 col-lg-6 contact'>
                                                        <input required type='email' className='form-control' name='email' placeholder='Your email*' onChange={(e) => setEmail(e.target.value)} />
                                                    </div>

                                                </div>

                                                <div className='row'>
                                                    <div className='col-12'>
                                                        <textarea required class='form-control contact' name='message' placeholder='Enter your message here...*' rows='3' onChange={(e) => setMsg(e.target.value)}></textarea>

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


            {/* MODAL START */}
               { (show===true) ? <Modal show={() => setShow(false)}/> : ''  }
            {/*MODAL END*/}
        </>
    )
}

export default Contact
