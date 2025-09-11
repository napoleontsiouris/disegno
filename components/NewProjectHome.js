import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { withTranslation } from "next-i18next"

const propTypes = {};

const defaultProps = {};
const API_URL = process.env.NEXT_PUBLIC_API_URL;


const NewProjectHome = ({ project }) => {
    // console.log('project', project)
    return (
        <React.Fragment>
            <div className="container-fluid about overflow-hidden py-5 ">
                <div className="container py-5">
                    <div className="row g-5">

                        <div className="col-xl-5 wow fadeInRight" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInLeft' }}>
                            <div className="about-item">
                                <h4 className="text-primary text-uppercase">Έργο υπό εξέλιξη</h4>
                                <h3 className="display-6 mb-3">{project.attributes.title}</h3>

                                <div className="bg-light rounded p-4 mb-4">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="d-flex">
                                                {project.attributes.intro}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <img src={`${API_URL}${project.attributes.gallery.data[0].attributes.url}`} className="img-fluid rounded h-100 w-100" style={{ objectFit: "cover" }} alt="" />

                            </div>
                        </div>
                        <div className="col-xl-7 wow fadeInLeft" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInLeft' }} >
                            <div className="about-img right rounded h-100">
                                <img src={`${API_URL}${project.attributes.main_photo.data.attributes.url}`} className="img-fluid rounded h-100 w-100" style={{ objectFit: "cover" }} alt="" />
                                <div className="about-exp"><span>{project.attributes.year}</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

NewProjectHome.propTypes = propTypes;
NewProjectHome.defaultProps = defaultProps;

export default NewProjectHome