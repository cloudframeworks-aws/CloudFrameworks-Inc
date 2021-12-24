import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        
        <>
            <footer>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-lg-10 mx-auto'>
                            <div className='row'>

                                <div className='col-6 col-lg-3'>
                                    <h4>Company</h4>
                                    <ul>
                                        <li><a href='#'>Data</a></li>
                                        <li><a href='#'>Data</a></li>
                                        <li><a href='#'>Data</a></li>
                                    </ul>
                                </div>

                                <div className='col-6 col-lg-3'>
                                    <h4>Support</h4>
                                    <ul>
                                        <li><a href='#'>Data</a></li>
                                        <li><a href='#'>Data</a></li>
                                        <li><a href='#'>Data</a></li>
                                    </ul>
                                </div>

                                <div className='col-6 col-lg-3'>
                                    <h4>Services</h4>
                                    <ul>
                                        <li><a href='#'>Data</a></li>
                                        <li><a href='#'>Data</a></li>
                                        <li><a href='#'>Data</a></li>
                                    </ul>
                                </div>

                                <div className='col-6 col-lg-3'>
                                    <h4>Follow Us</h4>
                                    <div className='row'>

                                        <div className='col-3 mx-auto'>
                                            <a href='#'></a><i className='fab fa-instagram social-icons'></i>
                                        </div>

                                        <div className='col-3 mx-auto'>
                                            <a href='#'></a><i className='fab fa-facebook social-icons'></i>
                                        </div>

                                        <div className='col-3 mx-auto'>
                                            <a href='#'></a><i className='fab fa-twitter social-icons'></i>
                                        </div>

                                    </div>
                                </div>

                            </div>

                            <hr/>
                                <div className='mt-5'>
                                    <p className='copyright-content text-center w-100'>&copy; {new Date().getFullYear()} CloudFrameworks Inc. All rights reserved.</p>
                                </div>
                          

                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
