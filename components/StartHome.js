import React from 'react';
import Link from 'next/link';
import { withTranslation } from "next-i18next"
import Image from 'next/image';



const StartHome = ({ projects }) => {
    return (
        <React.Fragment>
            <div className="container-fluid about overflow-hidden py-5 bg-light">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInLeft' }} >
                            <div className="about-img rounded">
                                

                                <Image
                                    style={{ objectFit: "cover", 'width': '100%' }}
                                    className="img-fluid rounded w-100 startHomeImg"
                                    src="/img/panigyri.jpg"
                                    alt="Pdf Icon"
                                    // width='100'
                                    fill
                                />
                                <div className="about-exp"><span>13 Χρόνια Προσφοράς</span></div>
                            </div>
                        </div>
                        <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInLeft' }}>
                            <div className="about-item">
                                <h4 className="text-primary text-uppercase">Η αρχή</h4>
                                <h1 className="display-3 mb-3">Πώς ξεκίνησαν όλα</h1>
                                {/* <p className="mb-4">Το καλοκαίρι του 2012 μια ομάδα νέων αποφάσισε να οργανώσει το πανηγύρι του χωριού, το οποίο όλα τα προηγούμενα χρόνια δεν είχε την οργανώση που θα μπορούσε δεδομένου του μέγεθους του χωριού μας.
                                </p> */}
                                <div className="bg-white rounded p-4 mb-4">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="d-flex flex-direction-column-549">
                                                <div className="pe-4">
                                                    <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}><i className="fas fa-cooperate text-white fa-2x"></i></div>
                                                </div>
                                                <div className="">
                                                    <a href="#" className="h4 d-inline-block mb-3">Κοινή προσπάθεια</a>
                                                    <p className="mb-0">Ήταν το καλοκαίρι του 2012 που μια ομάδα νέων αποφάσισε να οργανώσει το πανηγύρι του χωριού με πνευμά συνεργασίας και αγάπης προς το χωριό. </p>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="bg-white rounded p-4 mb-4">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="d-flex flex-direction-column-549">
                                                <div className="pe-4">
                                                    <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}><i className="fas fa-tradition text-white fa-2x"></i></div>
                                                </div>
                                                <div className="">
                                                    <a href="#" className="h4 d-inline-block mb-3">Πρώτο πανηγύρι</a>
                                                    <p className="mb-0">To 2012 οργανώθηκε το πρώτο πανηγύρι με την αποκλειστική οργάνωση της νεολαίας και την μαζική εθελοντική προσφορά τόσο της τότε Δημογεροντίας όσο και άλλων συγχωριανών μας</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}


export default StartHome;