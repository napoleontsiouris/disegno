import App from "next/app"
import { useEffect } from "react"
import Head from "next/head"
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "../assets/css/bootstrap.css"
import "../assets/css/style.css"
import '@fortawesome/fontawesome-free/css/all.min.css';

// import "../assets/css/font-awesome.min.css"
// import 'bootstrap/dist/css/bootstrap.css'
import { createContext } from "react"
// import { fetchAPI } from "../lib/api"
// import { getStrapiMedia } from "../lib/media"
import { appWithTranslation } from 'next-i18next'
import HeaderDiv from "../components/HeaderDiv"
import FooterDiv from "../components/FooterDiv";


// Store Strapi Global object in context
export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }) => {
  const { global, menu } = pageProps
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle");
  }, [])

  return (
    <>
      <GlobalContext.Provider >
        <HeaderDiv />
        <Component {...pageProps} />
        <FooterDiv />
      </GlobalContext.Provider>
    </>
  )
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getStaticProps = async (ctx) => {
  const { locale } = ctx.router;
  const locales = { 'en': 'en', 'el': 'el', 'sq': 'sq' };
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx)
  // Fetch global site settings from Strapi

  // Pass the data to our page via props
  return { ...appProps, pageProps: {} }
}

export default appWithTranslation(MyApp);
