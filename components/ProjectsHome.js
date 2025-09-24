import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { withTranslation } from "next-i18next"
import ProjectCard from './ProjectCard';
import Image from 'next/image';

const propTypes = {};

const defaultProps = {};

const projects = [
    {
        id: 1,
        attributes: {
            title: "Ελεύθερο Σχέδιο",
            slug: "elefthero-sxedio",
            intro: "Μάθετε τις βασικές αρχές του ελεύθερου σχεδίου και αναπτύξτε τις δεξιότητές σας μέσα από πρακτικές ασκήσεις και καθοδήγηση.",
            year: "2023",
            description: "<p>Τα μαθήματα ελεύθερου σχεδίου βοηθούν τους μαθητές να καλλιεργήσουν τη δημιουργικότητά τους και να αναπτύξουν τη φαντασία τους. Μέσα από ασκήσεις παρατήρησης, γραμμής και σκίασης, αποκτούν αυτοπεποίθηση στο να αποτυπώνουν τις ιδέες τους στο χαρτί.</p><p>Παράλληλα, προσφέρουν τις απαραίτητες βάσεις για σπουδές σε σχολές αρχιτεκτονικής, καλών τεχνών και design. Οι συμμετέχοντες μαθαίνουν τεχνικές αποτύπωσης όγκων, προοπτικής και φωτισμού, ενισχύοντας την ικανότητά τους να αποδίδουν την πραγματικότητα με ακρίβεια.</p><p>Τέλος, το ελεύθερο σχέδιο λειτουργεί και ως δημιουργική διέξοδος, χαρίζοντας χαλάρωση και συγκέντρωση. Είναι μια τέχνη που ενώνει την παρατήρηση με την προσωπική έκφραση, δίνοντας χώρο στη μοναδικότητα του κάθε μαθητή.</p>",
            main_photo: {
                data: {
                    attributes: {
                        url: "/img/1000002787.jpg", // replace with a local image in your public folder
                    },
                },
            },
            gallery: [
                { url: "/img/1000002791.jpg" },
                { url: "/img/1000002798.jpg" },
                { url: "/img/1000002797.jpg" },
                { url: "/img/1000002786.jpg" },
            ]
        },
    },
    {
        id: 1,
        attributes: {
            title: "Γραμμικό Σχέδιο",
            slug: "grammiko-sxedio",
            intro: "A luxurious villa combining modern architecture with natural light.",
            year: "2023",
            description: "<p>Τα μαθήματα γραμμικού σχεδίου εστιάζουν στην ακρίβεια και τη μεθοδικότητα μέσα από τη χρήση κανόνα, μολυβιού και διαβήτη. Οι μαθητές εκπαιδεύονται να αποδίδουν γεωμετρικά σχήματα, όψεις και κατασκευαστικές λεπτομέρειες με καθαρότητα και σαφήνεια.</p><p>Αποτελούν βασικό εργαλείο για όσους στοχεύουν σε σπουδές αρχιτεκτονικής, μηχανικής ή design. Μέσα από την εξάσκηση στην προοπτική, τις τομές και τα σχέδια κάτοψης, καλλιεργείται η χωρική αντίληψη και η οργανωμένη σκέψη.</p><p>Παράλληλα, το γραμμικό σχέδιο ενισχύει την πειθαρχία, την υπομονή και την ακρίβεια. Είναι μια διαδικασία που συνδυάζει την τεχνική με την αισθητική, οδηγώντας σε άρτια και λειτουργικά αποτελέσματα.</p>",
            main_photo: {
                data: {
                    attributes: {
                        url: "/img/1000002784.jpg", // replace with a local image in your public folder
                    },
                },
            },
            gallery: [

                { url: "/img/grammiko2.jpg" },
                { url: "/img/grammiko3.jpg" },
                { url: "/img/grammiko4.jpg" },
                { url: "/img/1000002794.jpg" },
            ]

        },
    }
];

const ProjectsHome = () => {
    // 

    return (
        <React.Fragment>
            <div id="tmimata" className="container-fluid blog ">

                <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px', visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }} >

                    <h1 className="display-3  mb-3">Τμήματα</h1>
                </div>
                <div className="row g-4 justify-content-center" >
                    {
                        projects.map((project, index) => {
                            const isOdd = index % 2 !== 0; // true if total projects count is odd
                            // console.log('isOdd', isOdd)
                            const extraClass = isOdd ? "odd-project" : "";
                            return <>
                                <ProjectCard inlineClass={`col-lg-12 col-xl-12 wow fadeInUp ${extraClass}`} project={project} />
                            </>
                        })
                    }
                </div>

                <div className="row g-3">
                    {/* A */}
                    <div className="col-md-4 no-padding order-1 order-md-1">
                        <div className="cell yellow">
                            <h3>Παιδικό τμήμα</h3>
                            <p>Μέσα από το παιχνίδι...</p>
                        </div>
                    </div>

                    {/* B */}
                    <div className="col-md-4 no-padding order-4 order-md-2">
                        <div className="cell">
                            <Image src="/img/1000002795.jpg" alt="designo" fill className="img-fluid w-100 startHomeImg" />
                        </div>
                    </div>

                    {/* C */}
                    <div className="col-md-4 no-padding order-5 order-md-3">
                        <div className="cell red">
                            <h3>Τμήμα ενηλίκων</h3>
                            <p>Σε φιλικό και δημιουργικό περιβάλλον...</p>
                        </div>
                    </div>

                    {/* D */}
                    <div className="col-md-4 no-padding order-2 order-md-4">
                        <div className="cell">
                            <Image src="/img/1000002799.jpg" alt="designo" fill className="img-fluid w-100 startHomeImg" />
                        </div>
                    </div>

                    {/* E */}
                    <div className="col-md-4 no-padding order-3 order-md-5">
                        <div className="cell blue">
                            <h3>Εφηβικό τμήμα</h3>
                            <p>Οι έφηβοι ανακαλύπτουν το προσωπικό τους ύφος...</p>
                        </div>
                    </div>

                    {/* F */}
                    <div className="col-md-4 no-padding order-last order-md-6">
                        <div className="cell">
                            <Image src="/img/1758659404655.jpg" alt="designo" fill className="img-fluid w-100 startHomeImg" />
                        </div>
                    </div>
                </div>




            </div>
        </React.Fragment>
    );
}

ProjectsHome.propTypes = propTypes;
ProjectsHome.defaultProps = defaultProps;

export default ProjectsHome