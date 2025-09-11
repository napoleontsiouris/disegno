import React from 'react';
import PropTypes from 'prop-types';
import { product_categories } from './global_variables';
import Link from 'next/link';
import { withTranslation } from "next-i18next"

const propTypes = {};

const defaultProps = {};

const PortfolioHome = ({ projects }) => {
    return (
        <React.Fragment>
            {/* <div className="main-banner">
                <div className="container-fluid">
                    
                    
                </div>
            </div> */}
            <section class="container-fluid main-banner portfolio" >
                <div className="heading_container  text-center ">
                    <h2 className="text-center justify-content-center py-5">
                        Τα έργα μας
                    </h2>
                </div>
                <div class="row">
                    <div class="col-md-6 mb-4">
                        <div class="card">
                            <img src="img/trigwno.png" class="card-img-top" alt="Image 1" />
                            <div class="card-body">
                                <h5 class="card-title">Ανακαίνιση τριγώνου</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mb-4">
                        <div class="card">
                            <img src="img/trigwno.png" class="card-img-top" alt="Image 1" />
                            <div class="card-body">
                                <h5 class="card-title">Κατασκευή παιδικής χαράς</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="row">
                            <div class="col-md-4 mb-4">
                                <div class="card">
                                    <img src="img/trigwno.png" class="card-img-top" alt="Image 2" />
                                    <div class="card-body">
                                        <h5 class="card-title">Συντήρηση δεξαμενής Δολιανής</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-4">
                                <div class="card">
                                    <img src="img/trigwno.png" class="card-img-top" alt="Image 3" />
                                    <div class="card-body">
                                        <h5 class="card-title">Title 3</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-4">
                                <div class="card">
                                    <img src="img/trigwno.png" class="card-img-top" alt="Image 4" />
                                    <div class="card-body">
                                        <h5 class="card-title">Title 4</h5>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

PortfolioHome.propTypes = propTypes;
PortfolioHome.defaultProps = defaultProps;

export default PortfolioHome