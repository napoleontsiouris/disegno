import Nav from "./nav";
import Footer from './footer'


const Layout = ({ children, categories, seo, menu }) => {
  
  return (
    <>
      <Nav menu={menu} />
      {children}
      <Footer menu={menu} />
    </>
  )
};



export default Layout
