import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { withTranslation } from "next-i18next"
import Image from 'next/image';

const propTypes = {};

const defaultProps = {};

const AboutHome = ({ projects }) => {
    return (
        <React.Fragment>
            <div id="profile" className="container-fluid feature bg-light">
                    {/* <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px', visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }} >
                        <h4 className="text-uppercase text-primary">Η ΝΕΟΛΑΙΑ</h4>
                        <h1 className="display-3  mb-3">Τα χαρακτηριστικά μιας ζωντανής νεολαίας</h1>
                    </div> */}
                    <div className="row g-4">
                        
                        <div data-aos="fade-up" data-aos-delay={400} className='col-md-6 col-lg-6 col-xl-6'>
                            <div className='about-description px-4'>
                                <h2 className='mb-4'>Λίγα λόγια</h2>
                                <p class="mb-4">Το νέο Εργαστήριο Καλών Τεχνών άνοιξε φέτος για πρώτη φορά και προσκαλεί μικρούς και μεγάλους να ανακαλύψουν τη χαρά της δημιουργίας. Σε έναν φωτεινό και ζεστό χώρο, οι συμμετέχοντες έχουν την ευκαιρία να εκφραστούν μέσα από ζωγραφική, γλυπτική και άλλες μορφές τέχνης.</p>

                                <p class="mb-4">Με καθοδήγηση από έμπειρους καλλιτέχνες, τα μαθήματα και τα σεμινάρια καλύπτουν διαφορετικές τεχνικές και υλικά, προσφέροντας τα εφόδια για προσωπική εξέλιξη και καλλιτεχνική αναζήτηση. Κάθε μάθημα προσαρμόζεται στις ανάγκες και στο επίπεδο των μαθητών.</p>

                                <p class="mb-1">Περισσότερο από σχολή, το εργαστήριο είναι μια δημιουργική κοινότητα. Εκθέσεις, συνεργασίες και ομαδικές δράσεις ενώνουν τους συμμετέχοντες και συμβάλλουν στη διάδοση της τέχνης στην πόλη.
                                </p>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-delay={800} className='col-md-6 col-lg-6 col-xl-6' >
                            <div className="row g-4">
                                <div className="col-md-12 col-lg-12 col-xl-12 wow fadeInUp" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
                                    <Image
                                        style={{ objectFit: "cover", 'width': '100%' }}
                                        className="img-fluid rounded w-100 startHomeImg"
                                        src="/img/1000002795.jpg"
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