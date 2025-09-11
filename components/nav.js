import React from "react"
import Link from "next/link";
import NextImage from "next/image";
import { getStrapiMedia } from "../lib/media"
import { GlobalContext } from "../pages/_app";
import { useContext } from "react";
import LanguageSwitcher from "./language_switcher";
import { withTranslation } from "next-i18next";


const Nav = ({  menu ,t }) => {
  const global = useContext(GlobalContext);
  // const logo = global.data.attributes.logo;
  let exists ;
  let menuItems;
  if(menu[0] == undefined){
    exists = 0;
  }
  else{
    exists = 1;
    menuItems = menu[0].attributes.menuItem; 
  }
  
  return (
    <div className="container-fluid header">
      <div className="row">
        <div className="col-md-12 header_logo_container">
          <div className="logo">
            <Link legacyBehavior href={`/`}>
              <a>
                <img src={getStrapiMedia(global.logo)} alt="Logo" />
              </a>
            </Link>
          </div>
        </div>
      
        <div className="col-md-12 header_menu_container">
          <ul className="">
            {exists && menuItems.map((menuItem) => {
              // console.log(menuItem.Submenu);
              return (
                
                  
                <li key={menuItem.id}>
                  <Link legacyBehavior href={menuItem.url ? menuItem.url : ''}>
                    <a>
                      {t(menuItem.title)}
                    </a>
                  </Link>
                  {menuItem.Submenu.length !=0 && 
                    <ul className="dropdown">
                        {menuItem.Submenu.map((submenuItem) => {
                          return (
                            <li key={submenuItem.id}>
                              <Link legacyBehavior href={submenuItem.url ? submenuItem.url : ''}>
                                {submenuItem.title}
                              </Link>
                            </li>
                          )
                        })}
                    </ul>
                  }
                </li>
                
              )
            })}
          </ul>
          <LanguageSwitcher />
        </div>
      </div>
       
        
      
    </div>
  )
}

export default  withTranslation()(Nav)
