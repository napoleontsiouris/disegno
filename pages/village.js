import React from "react"

import { useTranslation } from 'next-i18next';
import { withTranslation } from "next-i18next"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Head from "next/head";
import Carousel from "../components/Carousel";
import AboutHome from "../components/AboutHome";
import ProjectsHome from "../components/ProjectsHome";
import StartHome from "../components/StartHome";
import NewProjectHome from "../components/NewProjectHome";
import { fetchAPI } from "../lib/api";
import PageHeader from "../components/PageHeader";



const Village = ({ projects, project_current }) => {
    // console.log('project_current', project_current)
    //('products', products)

    return (
        <>
            <div>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Disegno</title>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />

                    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>

                    <meta name="description" content={`Disegno`} />


                </Head>
                <PageHeader title={`Το χωριό μας`} image={`https://disegno.dervitsani.ovh/uploads/xwrio_ab7ac4a643.jpg`} />

                <div className="container-fluid feature bg-white py-5">
                    <div className="container py-5">
                        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px', visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }} >
                            <h4 className="text-uppercase text-primary">Λίγα λόγια</h4>
                            <h2 className="display-5 text-capitalize mb-3">Η Δερβιτσάνη της βόρειας Ηπείρου</h2>
                        </div>
                        <div className="row g-4">
                            <div className="col-xl-4 wow fadeInLeft" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInLeft' }} >
                                <div className="about-img rounded mb-5">
                                    <img src="https://disegno.dervitsani.ovh/uploads/xwrio_ab7ac4a643.jpg" className="img-fluid rounded  w-100" style={{ objectFit: "cover" }} alt="" />

                                </div>
                                
                            </div>
                            <div className="col-xl-8 wow fadeInLeft" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInLeft' }} >
                                <div className="bg-light rounded p-4 mb-4">
                                    <div className="row">
                                        <div className="col-12">
                                            <h4 className=" mb-3">Γεωγραφία της περιοχής</h4>
                                            <p>
                                            Η Δερβι(η)τσάνη είναι κτισμένη δυτικά, επάνω στους πρόποδες του Δρϋινικού Όρους ή αλλιώς του κοινώς λεγόμενου Πλατυβουνίου. Ανατολικά συνορεύει με την κωμόπολη του Λιμποχόβου(όρος Νεμέρτσικα) ενώ από τα βορινά της γειτνιάζει με το νυν μουσουλμανικό χωριό των Λαζαρατών* και νοτίως της βρίσκεται το ελληνικό χωριό της Καλογοραντζής. Όσον αφορά την απόστασή της από την πλησιέστερη πόλη, το Αργυρόκαστρο, απέχει μόλις επτά χιλιόμετρα.</p>

                                            <p>Το χωριό προβάλλοντας αμφιθεατρικά στα δεξιά της εθνικής οδού Αργυροκάστρου – Κακαβιάς, τέμνεται από δύο μεγάλες χαράδρες, εκείνες του “Μεγαλάκκου” και του “Σαραντινού”, οι οποίες με τη σειρά τους οριοθετούν τις υπάρχουσες παλαιές συνοικίες του όλου οικισμού μας. Ωστόσο δε λείπουν και άλλες δευτερευούσης σημασίας, για την γεωγραφική σύσταση του χώρου. Εδώ μπορούμε να επισημάνουμε τη χαράδρα της “Δολιανής”, του “Ζεστού”, του “Νιάρτσι” κ.α.
                                            </p>

                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>

                        <div className="row g-4">
                            <div className="col-xl-4 wow fadeInLeft" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInLeft' }} >
                               
                                <div className="about-img rounded mb-4">
                                    <img src="https://disegno.dervitsani.ovh/uploads/621159_646579215357976_31989420_o_c321eec579.jpg" className="img-fluid rounded  w-100" style={{ objectFit: "cover" }} alt="" />

                                </div>
                            </div>
                            <div className="col-xl-8 wow fadeInLeft" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInLeft' }} >
                                

                                <div className="bg-light rounded p-4 mb-4">
                                    <div className="row">
                                        <div className="col-12">
                                            <h4 className=" mb-3">Ιστορία</h4>
                                           
                                            <p>
                                            Εν συγκρίσει με τα υπόλοιπα δεροπολίτικα χωριά, η Δερβι(η)τσάνη μέχρι και σήμερα αποτελεί το μεγαλύτερο και το πολυπληθέστερο, συσχετίζοντας και την έκταση, αλλά και τον αριθμό των κατοικιών.
                                            Όσον αφορά τη διάταξη των κτηρίων της, με βάση τα συγγράμματα τα οποία μας παρέχονται προς μελέτη, ήδη από την απώτερη βυζαντινή εποχή, επικρατεί το κλασικό βυζαντινό – ηπειρώτικο σύστημα διάταξης. Συγκεκριμένα,κοντά στο κέντρο του χωριού δεσπόζει ο ο ιερός ναός, έπειτα πλησίον του βρίσκεται το σχολείο, το κοιμητήριο, το δημαρχείο και το καφενείο ή το πανδοχείο (χάνι)</p>

                                            <p>Από τα πρώτα χρόνια αναφοράς και ύπαρξης της ζωής στον τόπο μας, η Δερβι(η)τσάνη αναφέρεται με το όνομα «Κουκούλια», το οποίο δεν είμαστε σε θέση να προσδιορίσουμε εάν πρόκειται περί παραφθοράς ή μεταλλαγής κάποιας προγενεστέρας ονομασίας.
                                            </p>
                                            <p>Τα αίτια της ερημώσεως σύμφωνα με τον Γ. Παπαδόπουλο ήταν οι καταστροφές που προκάλεσε ο στρατός του Λευκίου Αιμιλίου Παύλου, γύρω στο 167 μ. Χ. Άλλη πάλι αναφορά κάνει και ο Νικόλαος Γ. Μυστακίδης στο ημερολόγιο «Ηπειρωτικός Αστήρ»του 1904.
                                            </p>
                                            <p>υγκεκριμένα αναφέρει τα εξής: «Δερβητσάνη, το μεγαλύτερον της Δροπόλεως χωρίων, όπερ είς αρχαιοτέραν εποχήν έκειτο πλησίον είς την Μονήν Ασωμάτων και εκαλείτο Κουκούλια».
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <p>Πηγή: dervitsani.gr</p>
                                <p>*Συγγραφή – έρευνα – πνευματικά δικαιώματα: Γκοτζιάς Γιώργος</p>

                            </div>
                        </div>
                    </div>
                </div>

                {/* <Carousel /> */}

            </div>
        </>
    )
}

export async function getStaticProps(context) {



    return {
        props: {
            //   projects: projects.data,
            //   project_current: projects_current.data[0]
            // ...(await serverSideTranslations(locale, ['common'])),
        },
        revalidate: 1, // In seconds
    };
}




export default (Village)
