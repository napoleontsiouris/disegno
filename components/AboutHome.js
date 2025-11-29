import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { withTranslation } from "next-i18next"
import Image from 'next/image';

const propTypes = {};

const defaultProps = {};

const AboutHome = ({ profile }) => {
    // console.log('profile', profile)
    return (
        <React.Fragment>
            <div id="profile" className="container-fluid feature bg-light" style={{overflowX: 'hidden'}}>
                    {/* <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px', visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }} >
                        <h4 className="text-uppercase text-primary">Η ΝΕΟΛΑΙΑ</h4>
                        <h1 className="display-3  mb-3">Τα χαρακτηριστικά μιας ζωντανής νεολαίας</h1>
                    </div> */}
                    <div className="row g-4">
                        
                        <div data-aos="fade-right" data-aos-delay={400} className='col-md-6 col-lg-6 col-xl-6'>
                            <div className='about-description px-4'>
                                <h2 className='mb-4'>{profile.title}</h2>
                                <div dangerouslySetInnerHTML={{ __html: profile.description }}>
                                    
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-left" data-aos-delay={800} className='col-md-6 col-lg-6 col-xl-6' >
                            <div className="row g-4">
                                <div className="col-md-12 col-lg-12 col-xl-12 wow fadeInUp" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
                                    <Image
                                        style={{ objectFit: "cover", 'width': '100%' }}
                                        className="img-fluid rounded w-100 startHomeImg"
                                        src={  `${process.env.NEXT_PUBLIC_API_URL}${profile.image.url}` }   
                                        alt="designo"
                                        // width='100'
                                        fill
                                    />
                                </div>
                               
                            </div>
                        </div>

                    </div>
            </div>
        </React.Fragment>
    );
}

AboutHome.propTypes = propTypes;
AboutHome.defaultProps = defaultProps;

export default AboutHome