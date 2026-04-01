import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { withTranslation } from "next-i18next"
import Image from 'next/image';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const propTypes = {};

const defaultProps = {};

const AboutHome = ({ profile }) => {
    const leftRef = useRef(null);
    const rightRef = useRef(null);

    useEffect(() => {
        if (leftRef.current) {
            gsap.from(leftRef.current, {
                x: -60, opacity: 0, duration: 0.8, ease: "power2.out",
                scrollTrigger: { trigger: leftRef.current, start: "top 85%" },
            });
        }
        if (rightRef.current) {
            gsap.from(rightRef.current, {
                x: 60, opacity: 0, duration: 0.8, delay: 0.2, ease: "power2.out",
                scrollTrigger: { trigger: rightRef.current, start: "top 85%" },
            });
        }
    }, []);

    // console.log('profile', profile)
    return (
        <React.Fragment>
            <div id="profile" className="container-fluid feature bg-light" style={{overflowX: 'hidden'}}>
                    <div className="row g-4">
                        
                        <div ref={leftRef} className='col-md-6 col-lg-6 col-xl-6'>
                            <div className='about-description px-4'>
                                <h2 className='mb-4'>{profile.title}</h2>
                                <div dangerouslySetInnerHTML={{ __html: profile.description }}>
                                    
                                </div>
                            </div>
                        </div>
                        <div ref={rightRef} className='col-md-6 col-lg-6 col-xl-6' >
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