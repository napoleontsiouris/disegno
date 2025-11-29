import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { withTranslation } from "next-i18next"
import ProjectCard from './ProjectCard';
import Image from 'next/image';

const propTypes = {};

const defaultProps = {};



const ProjectsHome = ( {sectionsPanellinies, sectionsNonPanellinies }) => {
    // console.log('sectionsNonPanellinies', sectionsNonPanellinies)
    // console.log('sectionsPanellinies', sectionsPanellinies)
    // 

    return (
        <React.Fragment>
            <div style={{overflowX: 'hidden'}} id="tmimata" className="container-fluid blog ">

                <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px', visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }} >

                    <h1 className="display-3  mb-3">Τμήματα</h1>
                </div>
                <div className="row g-4 justify-content-center" >
                    {
                        sectionsPanellinies.map((section, index) => {
                            const isOdd = index % 2 !== 0; // true if total projects count is odd
                            // console.log('isOdd', isOdd)
                            const extraClass = isOdd ? "odd-project" : "";
                            return <>
                                <ProjectCard inlineClass={`col-lg-12 col-xl-12 wow fadeInUp ${extraClass}`} project={section} />
                            </>
                        })
                    }
                </div>

                <div className="row g-3">
                {sectionsNonPanellinies.map((section, i) => {
                    // console.log('section', section)
                    return (
                        <React.Fragment key={i}>
                            {/* Text block */}
                            <div className={`col-md-4 no-padding order-${section.orderText} order-md-${section.orderText_md}`} >
                                <div className={`cell ${section.color}`} style={{backgroundColor: section.color ? section.color : '#444'}}>
                                <h3>{section.title}</h3>
                                <p>{section.description}</p>
                                </div>
                            </div>

                            {/* Image block */}
                            <div className={`col-md-4 no-padding order-${section.orderImage ? section.orderImage : 'last'} order-md-${section.orderImage_md ? section.orderImage_md: 'last'}`} >
                                <div className="cell">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_API_URL}${section.image.url}`}
                                    alt={section.title}
                                    fill
                                    className="img-fluid w-100 startHomeImg"
                                />
                                </div>
                            </div>
                        </React.Fragment>
                    )
                })}
                </div>




            </div>
        </React.Fragment>
    );
}

ProjectsHome.propTypes = propTypes;
ProjectsHome.defaultProps = defaultProps;

export default ProjectsHome