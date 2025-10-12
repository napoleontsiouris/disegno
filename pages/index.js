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




const Home = ({ banner }) => {
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
        <Carousel banner={banner} />
        {/* <InfoHome /> */}
        <AboutHome />
        {/* <PortfolioHome projects={projects} /> */}

        {/* <StartHome /> */}
        <ProjectsHome  />

        <Space />
        <Contact />
        
       
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
    populate: ['slides'],
    // locale: locales[locale]
  });
  // console.log('banner', banner)
  

 


  return {
    props: {
      banner: banner.data,
      // project_current: projects_current.data[0]
      // ...(await serverSideTranslations(locale, ['common'])),
    },
    revalidate: 1, // In seconds
  };
}




export default (Home)
