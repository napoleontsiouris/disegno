import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from "next-i18next"
import { gsap } from "gsap";
import Image from 'next/image';
import { getStrapiMedia } from '../lib/media';


const propTypes = {};

const defaultProps = {};

const Carousel = ({ banner, t }) => {
    // console.log('banner', banner)
    // console.log('banner', banner)
    const title = banner && banner.length > 0 && banner[0].title ? banner[0].title : "DISEGNO";
    const image = banner && banner.length > 0 && banner[0].image ? banner[0].image : "DISEGNO";
    const subtitle = banner && banner.length > 0 && banner[0].subtitle ? banner[0].subtitle : "Φροντιστήριο Σχεδίου";
    const slide = banner && banner.length > 0 && banner[0].slides && banner[0].slides.length > 0 ? banner[0].slides[0] : null;
    const mobileslide = banner && banner.length > 0 && banner[0].mobile_slides && banner[0].mobile_slides.length > 0 ? banner[0].mobile_slides[0] : null;
    const slideUrl = getStrapiMedia(slide);
    const mobileSlideUrl = getStrapiMedia(mobileslide) || slideUrl;

    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    useEffect(() => {
        if (titleRef.current) {
            gsap.from(titleRef.current.querySelectorAll("span"), {
                x: -60,
                opacity: 0,
                duration: 0.6,
                stagger: 0.05,
                ease: "power2.out",
            });
        }
        if (subtitleRef.current) {
            gsap.from(subtitleRef.current, {
                y: 20,
                opacity: 0,
                duration: 0.8,
                delay: title.length * 0.05 + 0.2,
                ease: "power2.out",
            });
        }
    }, []);
    
    return (
        <React.Fragment>
            <div className="container-fluid p-0">
                <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            {slideUrl ? (
                                <Image
                                    style={{ objectFit: "cover", 'width': '100%' }}
                                    className="img-height-fluid img-fluid width100 hide549"
                                    src={slideUrl}
                                    alt="designo"
                                    fill
                                />
                            ) : null}

                            {mobileSlideUrl ? (
                                <Image
                                    style={{ objectFit: "cover", 'width': '100%' }}
                                    className="img-height-fluid img-fluid width100 show549"
                                    src={mobileSlideUrl}
                                    alt="designo"
                                    fill
                                />
                            ) : null}
                            <div className="carousel-caption d-flex">
                                <div className="p-5 carousel-text-container" style={{ width: '100%', maxWidth: '1200px' }}>
                                    <h1 ref={titleRef} className="text-white text-5xl font-bold flex gap-1">
                                        {title.split("").map((char, index) => (
                                            <span key={index} className="inline-block">
                                                {char}
                                            </span>
                                        ))}
                                    </h1>
                                    <h2 ref={subtitleRef} className="text-white text-2xl mt-2 flex flex-wrap gap-1">
                                        {subtitle}
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