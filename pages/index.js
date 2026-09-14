import React from "react"

import Head from "next/head";
import Carousel from "../components/Carousel";
import AboutHome from "../components/AboutHome";
import ProjectsHome from "../components/ProjectsHome";
import { fetchAPI } from "../lib/api";
import Space from "../components/Space";
import Contact from "../components/Contact";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.disegno-artlab.gr";
const HOME_TITLE = "Disegno | Καλών Τεχνών στην Αμαλιάδα";
const HOME_DESCRIPTION = "Μαθήματα καλών τεχνών στην Αμαλιάδα από το Disegno: προετοιμασία για πανελλήνιες, ελεύθερο και γραμμικό σχέδιο. Επικοινωνήστε για πληροφορίες και εγγραφές.";




const Home = ({ banner, profile, sectionsPanellinies, sectionsNonPanellinies, facility, contact }) => {
  // console.log('sectionsNonPanellinies', sectionsNonPanellinies)
  // console.log('project_current', project_current)
  //('products', products)
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "ArtSchool",
    name: "Disegno",
    url: `${SITE_URL}/`,
    image: `${SITE_URL}/logo.jpg`,
    telephone: "+30 2622 021494",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Κουρογιαννοπούλου 37",
      addressLocality: "Αμαλιάδα",
      addressCountry: "GR",
    },
    areaServed: "Αμαλιάδα",
    sameAs: [
      "https://facebook.com/profile.php?id=61576663653850",
      "https://instagram.com/disegno_frontistirio_sxediou",
    ],
  };
  
  return (
    <>
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>{HOME_TITLE}</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>

          <meta name="description" content={HOME_DESCRIPTION} />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href={`${SITE_URL}/`} />

          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Disegno" />
          <meta property="og:locale" content="el_GR" />
          <meta property="og:title" content={HOME_TITLE} />
          <meta property="og:description" content={HOME_DESCRIPTION} />
          <meta property="og:url" content={`${SITE_URL}/`} />
          <meta property="og:image" content={`${SITE_URL}/logo.jpg`} />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={HOME_TITLE} />
          <meta name="twitter:description" content={HOME_DESCRIPTION} />
          <meta name="twitter:image" content={`${SITE_URL}/logo.jpg`} />

          <link rel="alternate" hrefLang="el" href={`${SITE_URL}/`} />
          <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/`} />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
          />
        </Head>
        <Carousel banner={banner} />
        <div className="container py-4 text-center d-none" aria-hidden="true">
          <p className="mb-0">
            Το Disegno προσφέρει μαθήματα καλών τεχνών στην Αμαλιάδα με έμφαση στη σωστή προετοιμασία,
            τη δημιουργικότητα και την τεχνική εξέλιξη κάθε μαθητή.
          </p>
        </div>
        {/* <InfoHome /> */}
        <AboutHome profile={profile} />
        {/* <PortfolioHome projects={projects} /> */}

        {/* <StartHome /> */}
        <ProjectsHome sectionsPanellinies={sectionsPanellinies} sectionsNonPanellinies={sectionsNonPanellinies} />

        <Space facility={facility} />
        <Contact contact={contact} />
        
       
        {/*<TestimonialHome />
        <BlogHome />  */}
      </div>
    </>
  )
}

export async function getStaticProps(context) {
  // Run API calls in parallel
  const banner = await fetchAPI("/banners", {
    filters: {
      slug: 'main_banner',
    },
    populate: ['slides','mobile_slides' ],
  });

  const profile = await fetchAPI("/profile", {
    populate: ['image'],
  });

  const facility = await fetchAPI("/facility", {
    populate: ['photos'],
  });
  const contact = await fetchAPI("/contact", {
    populate: ['image'],
  });

  const sectionsMain = await fetchAPI("/sections", {
    filters: {
      section_categories: {
        slug: 'panellinies'
      },
    },
    sort: ['ordering:asc'], 
    populate: ['image','gallery', 'section_categories'],
  });



  const sections = await fetchAPI("/sections", {
    populate: ['image','gallery', 'section_categories'],
    sort: ['ordering:asc']
  });


  const sectionsNonPanellinies1 = sections && sections.data.filter(
    section => !section.section_categories.some(
      cat => cat.slug === 'panellinies'
    )
  );

  return {
    props: {
      banner: banner && banner.data,
      profile: profile && profile.data,
      sectionsPanellinies: sectionsMain && sectionsMain.data,
      sectionsNonPanellinies: sectionsNonPanellinies1,
      facility: facility &&facility.data,
      contact: contact && contact.data
      // ...(await serverSideTranslations(locale, ['common'])),
    },
    revalidate: 1, // In seconds
  };
}




export default (Home)
