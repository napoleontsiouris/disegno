import Head from "next/head";
import PageHeader from "../components/PageHeader";
import { fetchAPI } from "../lib/api";
import Gallery from "../components/gallery";

const Albums = ({albums}) => {
    // console.log('albums', albums)
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
                <PageHeader title={`Φωτογραφικό υλικό`} image={`https://disegno.dervitsani.ovh/uploads/xwrio_ab7ac4a643.jpg`}  />
                <div className="container-fluid feature bg-white py-5">
                    <div className="container py-5">
                        {/* <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px', visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }} >
                            <h4 className="text-uppercase text-primary">Λίγα λόγια</h4>
                            <h2 className="display-5 text-capitalize mb-3">Η Δερβιτσάνη της βόρειας Ηπείρου</h2>
                        </div> */}
                        <div className="row g-4">
                            <div className="col-xl-12 col-md-12 wow fadeInLeft" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInLeft' }} >
                                <Gallery photos={albums[0].attributes.gallery}/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export async function getStaticProps(context) {

    const albums = await fetchAPI("/albums", {
        populate: "*",
    });

    return {
        props: {
            albums: albums.data,            
            //   project_current: projects_current.data[0]
            // ...(await serverSideTranslations(locale, ['common'])),
        },
        revalidate: 1, // In seconds
    };
}

export default (Albums)


