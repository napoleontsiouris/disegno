import React from 'react'
const Contact = ({contact}) => {
    // console.log('contact', contact)
    return (
        <React.Fragment>
            <div id="contact" className="container-fluid contact-container" style={{backgroundImage: `url(${process.env.NEXT_PUBLIC_API_URL}${contact.image.url})`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '100px 0', height: '85vh', overflowX: 'hidden'}}>
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
                                                <li><i className="fa fa-map-marker"></i>Κουρογιαννοπούλου 37, Αμαλιάδα</li>
                                                {/* <li><i className="fa fa-phone"></i> Τηλέφωνο: <a href="tel:+302106500123">+30 212345533</a></li> */}
                                                <li><i className="fa fa-envelope"></i> <a href="mailto:frontistirio_disegno@outlook.com"> frontistirio_disegno@outlook.com</a></li>
                                            </ul>
                                            <div className="social-links">
                                            <a href="https://facebook.com/profile.php?id=61576663653850" aria-label="Facebook"><i class="fa-brands fa-facebook"></i></a>
                                            <a href="https://instagram.com/disegno_frontistirio_sxediou" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
                                            {/* <a href="#" aria-label="Youtube"><i class="fa-brands fa-youtube"></i></a> */}
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