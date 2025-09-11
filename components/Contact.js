import React from 'react'
const Contact = () => {
    return (
        <React.Fragment>
            <div id="contact" className="container-fluid contact-container">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className='contact-box'>
                                <div className='row align-items-center flex-row'>
                                    <div className='col-md-6'>
                                        <div className='contact-info'>
                                            <h6>DISEGNO</h6>
                                            <h1>Επικοινωνία</h1>
                                            <p>Είμαστε εδώ για να σας βοηθήσουμε με οποιεσδήποτε ερωτήσεις ή πληροφορίες χρειάζεστε σχετικά με τα μαθήματά μας.</p>
                                           
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='contact-info-right'>
                                            <ul>
                                                <li><i className="fa fa-map-marker"></i>Αμαλιάδα</li>
                                                <li><i className="fa fa-phone"></i> Τηλέφωνο: <a href="tel:+302106500123">+30 212345533</a></li>
                                                <li><i className="fa fa-envelope"></i> Email: <a href="mailto: ">dsa</a></li>
                                            </ul>
                                            <div className="social-links">
                                            <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook"></i></a>
                                            <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
                                            <a href="#" aria-label="Youtube"><i class="fa-brands fa-youtube"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>            
                               
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </React.Fragment>
    )
}

export default Contact