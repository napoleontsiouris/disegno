import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from "next-i18next"
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion";


const propTypes = {};

const defaultProps = {};

const Carousel = ({ t }) => {
    const title = "DISEGNO";
    const subtitle = "Φροντιστήριο Σχεδίου";
    return (
        <React.Fragment>
            <div className="container-fluid p-0">
                <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="img-height-fluid img-fluid width100" src="img/heroBanner.jpg" alt="Image" />
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