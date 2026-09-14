import React from "react"

import { useTranslation } from 'next-i18next';
import { withTranslation } from "next-i18next"
import {serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Head from "next/head";
import Carousel from "../components/Carousel";
import AboutHome from "../components/AboutHome";
import ProjectsHome from "../components/ProjectsHome";
import StartHome from "../components/StartHome";
import NewProjectHome from "../components/NewProjectHome";
import { fetchAPI } from "../lib/api";
import Space from "../components/Space";
import Contact from "../components/Contact";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.disegno-artlab.gr";
const HOME_TITLE = "Disegno | Φροντιστήριο Σχεδίου";
const HOME_DESCRIPTION = "Μαθήματα σχεδίου για πανελλήνιες και ελεύθερο σχέδιο στην Αμαλιάδα. Επικοινωνήστε με το Disegno για πληροφορίες και εγγραφές.";




const Home = ({ banner, profile, sectionsPanellinies, sectionsNonPanellinies, facility, contact }) => {
  // console.log('sectionsNonPanellinies', sectionsNonPanellinies)
  // console.log('project_current', project_current)
  //('products', products)
  
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
        </Head>
        <Carousel banner={banner} />
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
