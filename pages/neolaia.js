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



const disegno = ({ projects, project_current }) => {
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




export default (disegno)
