import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from "next-i18next"
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion";
import Image from 'next/image';
import { getStrapiMedia } from '../lib/media';


const propTypes = {};

const defaultProps = {};

const Carousel = ({ banner, t }) => {
    console.log('banner', banner)
    const title = banner && banner.length > 0 && banner[0].title ? banner[0].title : "DISEGNO";
    const image = banner && banner.length > 0 && banner[0].image ? banner[0].image : "DISEGNO";
    const subtitle = banner && banner.length > 0 && banner[0].subtitle ? banner[0].subtitle : "Φροντιστήριο Σχεδίου";
    const slide = banner && banner.length > 0 && banner[0].slides && banner[0].slides.length > 0 ? banner[0].slides[0] : null;
    console.log('slide', slide)
    
    return (
        <React.Fragment>
            <div className="container-fluid p-0">
                <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            {/* <img className="img-height-fluid img-fluid width100" src="img/heroBanner.jpg" alt="Image" /> */}
                            <Image
                                style={{ objectFit: "cover", 'width': '100%' }}
                                className="img-height-fluid img-fluid width100"
                                src={`${process.env.NEXT_PUBLIC_API_URL}${slide.url}`}
                                alt="designo"
                                // width='100'
                                fill
                            />
                            <div className="carousel-caption d-flex">
                                <div className="p-5 carousel-text-container" style={{ width: '100%', maxWidth: '1200px' }}>
                                <h1 className="text-white text-5xl font-bold flex gap-1">
                                    {title.split("").map((char, index) => (
                                    <span
                                        key={index}
                                        data-aos="fade-right"
                                        data-aos-delay={index * 300} // stagger delay
                                        className="inline-block"
                                    >
                                        {char}
                                    </span>
                                    ))}
                                </h1>

                                {/* Subtitle with per-letter animation */}
                                <h2 className="text-white text-2xl mt-2 flex flex-wrap gap-1">{subtitle}
                                    
                                </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

Carousel.propTypes = propTypes;
Carousel.defaultProps = defaultProps;


export default withTranslation()(Carousel)