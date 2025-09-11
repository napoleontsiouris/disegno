import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { withTranslation } from "next-i18next";
import Head from 'next/head';
import Image from 'next/image';

const HeaderDiv = ({ t }) => {
    const router = useRouter();
    const [scrollClass, setScrollClass] = useState('');
    const navbarCollapseRef = useRef(null);

    let pageClass;
    if (router.route.includes('products')) {
        pageClass = 'products_page';
    }
    if (router.route.includes('contact')) {
        pageClass = 'contact_page';
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleScroll = () => {
                if (window.scrollY > 250) {
                    setScrollClass('fixed');
                } else {
                    setScrollClass('');
                }
            };

            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);

    // Function to close menu when a link is clicked
    const closeNavbar = () => {
        if (typeof window !== 'undefined' && navbarCollapseRef.current) {
            import('bootstrap/dist/js/bootstrap.bundle').then((bootstrap) => {
                const bsCollapse = new bootstrap.Collapse(navbarCollapseRef.current, {
                    toggle: false,
                });
                bsCollapse.hide();
            });
        }
    };

    return (
        <React.Fragment>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <div className={`container-fluid header ${scrollClass}`}>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row d-flex d-lg-flex d-md-flex d-sm-flex">
                            <div className="col-lg-12">
                                <div className="main_header">
                                    <div className="logo">
                                        <Image
                                            style={{ objectFit: "cover", 'width': '100%' }}
                                            className="img-fluid rounded w-100 startHomeImg"
                                            src="/logo.png"
                                            alt="Pdf Icon"
                                            // width='100'
                                            fill
                                        />
                                    </div>
                                    <div className='menu'>
                                        <nav className="navbar navbar-expand-lg navbar-light">
                                            <button
                                                type="button"
                                                className="navbar-toggler"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#navbarCollapse"
                                            >
                                                <span className="navbar-toggler-icon"></span>
                                            </button>

                                            <div className="collapse navbar-collapse" id="navbarCollapse" ref={navbarCollapseRef}>
                                                <div className="navbar-nav py-0 justify-content-between">
                                                    <Link legacyBehavior href={'/'}>
                                                        <a 
                                                            className={`nav-item nav-link ${router.route == '/' ? 'current' : ''}`}
                                                            onClick={closeNavbar} // Close menu on click
                                                        >
                                                            {t('Αρχική')}
                                                        </a>
                                                    </Link>
                                                    <Link legacyBehavior href={'#profile'}>
                                                        <a 
                                                            className={`nav-item nav-link ${router.route == '#profile' ? 'current' : ''}`}
                                                            onClick={closeNavbar} // Close menu on click
                                                        >
                                                            {t('Προφίλ')}
                                                        </a>
                                                    </Link>

                                                    <Link legacyBehavior href={'#tmimata'}>
                                                        <a 
                                                            className={`nav-item nav-link ${router.route == '#tmimata' ? 'current' : ''}`}
                                                            onClick={closeNavbar} // Close menu on click
                                                        >
                                                            {t('Τμήματα')}
                                                        </a>
                                                    </Link>

                                                    <Link legacyBehavior href={'#xwros'}>
                                                        <a 
                                                            className={`nav-item nav-link ${router.route == '#xwros' ? 'current' : ''}`}
                                                            onClick={closeNavbar} // Close menu on click
                                                        >
                                                            {t('Χώρος')}
                                                        </a>
                                                    </Link>

                                                    <Link legacyBehavior href={'#contact'}>
                                                        <a 
                                                            className={`nav-item nav-link ${router.route == '#contact' ? 'current' : ''}`}
                                                            onClick={closeNavbar} // Close menu on click
                                                        >
                                                            {t('Επικοινωνία')}
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </nav>  
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-lg-12">
                                <nav className="navbar navbar-expand-lg navbar-light">
                                    <button
                                        type="button"
                                        className="navbar-toggler"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#navbarCollapse"
                                    >
                                        <span className="navbar-toggler-icon"></span>
                                    </button>

                                    <div className="collapse navbar-collapse" id="navbarCollapse" ref={navbarCollapseRef}>
                                        <div className="navbar-nav py-0 justify-content-between">
                                            <Link legacyBehavior href={'/'}>
                                                <a 
                                                    className={`nav-item nav-link ${router.route == '/' ? 'current' : ''}`}
                                                    onClick={closeNavbar} // Close menu on click
                                                >
                                                    {t('Αρχική')}
                                                </a>
                                            </Link>

                                            <Link legacyBehavior href={'/village'}>
                                                <a 
                                                    className={`nav-item nav-link ${router.route == '/village' ? 'current' : ''}`}
                                                    onClick={closeNavbar} // Close menu on click
                                                >
                                                    {t('Το χωριό μας')}
                                                </a>
                                            </Link>

                                            <Link legacyBehavior href={'/albums'}>
                                                <a 
                                                    className={`nav-item nav-link ${router.route == '/albums' ? 'current' : ''}`}
                                                    onClick={closeNavbar} // Close menu on click
                                                >
                                                    {t('Φωτογραφικό υλικό')}
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </nav>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default withTranslation()(HeaderDiv);
