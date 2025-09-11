import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from "next-i18next"
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion";


const propTypes = {};

const defaultProps = {};

const Carousel = ({ t }) => {
    return (
        <React.Fragment>
            <div className="container-fluid p-0">
                <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="img-height-fluid img-fluid width100" src="img/heroBanner.jpg" alt="Image" />
                            <div className="carousel-caption d-flex">
                                <div className="p-5 carousel-text-container" style={{ width: '100%', maxWidth: '1200px' }}>
                                    <h1 className=" text-white ">DISEGNO
                                    </h1>
                                    <h2 className="text-white mb-md-4">Φροντιστήριο Σχεδίου
                                    </h2>

                                    {/* <h1 className="display-1 text-white mb-md-4">
                                        <Typewriter
                                            onInit={(typewriter) => {
                                                typewriter
                                                    .typeString('DESIGNO')
                                                    .pauseFor(500)
                                                    .callFunction(() => {
                                                        // optionally trigger something when first text ends
                                                    })
                                                    .start();
                                            }}
                                            options={{
                                                delay: 100,
                                            }}
                                        />
                                    </h1> */}
                                    {/* <h2 className="text-white mb-md-4">
                                        <Typewriter
                                            onInit={(typewriter) => {
                                                setTimeout(() => {
                                                    typewriter
                                                        .typeString('Φροντιστήριο Σχεδίου')
                                                        .start();
                                                }, 1500); // delay to start after first one finishes
                                            }}
                                            options={{
                                                delay: 100,
                                            }}
                                        />
                                    </h2> */}

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