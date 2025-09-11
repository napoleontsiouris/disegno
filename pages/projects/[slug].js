// /posts/[slug].js
import Head from "next/head";
import Gallery from '../../components/gallery';
import { fetchAPI } from "../../lib/api";
import PageHeader from "../../components/PageHeader";
import ReactMarkdown from 'react-markdown';
import Link from "next/link";
import Image from "next/image";


function extractText(node) {
    let result = [];

    function recurse(n) {
        if (Array.isArray(n)) {
            n.forEach(recurse);
        } else if (n.children) {
            recurse(n.children);
        } else if (n.text) {
            result.push(n.text);
        }
    }

    recurse(node);
    return result;
}

const ProjectPage = ({ project }) => {
    // console.log('project', project.attributes.description)
    // console.log('product', project.attributes.tables.data)
    // console.log('post', product.attributes.photos)
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const short_description = project.attributes.short_description && extractText(project.attributes.short_description);
    // const description = project.attributes.description && extractText(project.attributes.description);
    // console.log('project.attributes.description', project.attributes.description)
    // console.log('description', description)

    return (
        <>

            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Disegno</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />

                
                <link
                    href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap"
                    rel="stylesheet"
                    />

                <meta name="description" content={`Disegno`} />


            </Head>
            <PageHeader title={project.attributes.title} image={`${API_URL}${project.attributes.main_photo.data.attributes.url}`} />
            <div className="container-fluid feature bg-white py-5">
                <div className="container py-5">
                    {/* <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px', visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }} >
                        <h4 className="text-uppercase text-primary">Λίγα λόγια</h4>
                        <h2 className="display-5 text-capitalize mb-3">Η Δερβιτσάνη της βόρειας Ηπείρου</h2>
                    </div> */}
                    <div className="row">
                        <div className="col-md-8">
                            <div className="row g-4">
                                <div className="col-xl-12 col-md-12 wow fadeInLeft" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInLeft' }} >
                                    <div className="bg-light rounded p-4 mb-4">
                                        <div className="row">
                                            <div className="col-12">
                                                <h4 className=" mb-3">Περιγραφή έργου</h4>
                                                {short_description  && short_description.map((text, index) => (
                                                    <div key={index} className="text-justify">
                                                        {text}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                     {project.attributes.description && <div className="bg-light rounded p-4 mb-4">
                                        <div className="row">
                                            <div className="col-12">
                                                <h4 className=" mb-3">Αναλυτική κατάσταση</h4>
                                                    <ReactMarkdown className="text-justify">{project.attributes.description}</ReactMarkdown>
                                            </div>
                                        </div>
                                    </div>}


                                </div>
                            </div>
                            <div className="row g-4">
                                <div className="col-xl-12 col-md-12 wow fadeInLeft" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInLeft' }} >
                                    {project && project.attributes.gallery && <Gallery photos={project.attributes.gallery} />}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="sticky-sidebar">
                                <div className="row g-4">
                                    <div className="col-xl-12 col-md-12 wow fadeInLeft" data-wow-delay="0.2s">
                                        <div className="bg-light rounded p-4 mb-4">
                                            <div className="row">
                                                <div className="col-12">
                                                    <h4 className=" mb-3">Αρχεία</h4>
                                                    {project.attributes.tables && project.attributes.tables.data &&  project.attributes.tables.data.map((el) => (
                                                        <div className="row" key={el.id}>
                                                            <div className="col-12">
                                                                <Link
                                                                    target="_blank"
                                                                    href={`https://disegno.dervitsani.ovh${el.attributes.url}`}
                                                                    className="pdf-wrapper"
                                                                >
                                                                    <div className="icon-wrapper" style={{ position: 'relative', width: '32px', height: '32px' }}>
                                                                        <Image
                                                                            className="pdf-icon object-contain"
                                                                            src="/img/pdf.png"
                                                                            alt="Pdf Icon"
                                                                            fill
                                                                        />
                                                                    </div>
                                                                    {el.attributes.caption}
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </>
    );
}

//hey Next, these are the possible slugs
export async function getStaticPaths() {
    const projectRes = await fetchAPI("/projects", { fields: ["slug"] })

    return {
        paths: projectRes.data.map((project) => ({
            params: {
                slug: project.attributes.slug,
            },
        })),
        fallback: "blocking",

    }
}

//access the router, get the id, and get the data for that post
export async function getStaticProps(context) {
    //console.log(context);
    const { params } = context
    const projectRes = await fetchAPI("/projects", {
        filters: {
            slug: params.slug,
        },
        populate: "*",
    });




    return {
        props: {
            project: projectRes.data[0],
            // ...(await serverSideTranslations(locale, ['common'])),
        },
        revalidate: 1,

    }
}

export default (ProjectPage)