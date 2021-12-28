import React from 'react'

const Modal = ({show}) => {
    return (
        
        <>
         <div className="modal show fade" tabindex="-1" style={{display: "block", backgroundColor:"rgba(0,0,0,0.8)"}}>
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 class="modal-title">Acknowledgement</h5>
                        <button type="button" className="btn-close" onClick={show}></button>
                    </div>
                    <div className="modal-body">
                        <p style={{fontWeight: 'lighter'}}>Thank you for connecting with us! We'll get back to you shortly.</p>
                    </div>
                    <div class="modal-footer justify-content-center">
                        
                        <button type="button" className="btn btn-danger" onClick={show}>Close</button>        
                        
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal
