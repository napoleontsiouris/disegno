import React from "react"
import Link from "next/link"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { getStrapiMedia } from "../lib/media";

const Swiper = ({ slides }) => {
  //console.log(slides);
  let exists ;
  let heroes ;
  if(slides[0] == undefined){
    exists = 0;
  }
  else{
    exists = 1;
    heroes = slides[0].attributes.hero; 
  }

  return (
    <div className="container-fluid no-padding">
      {exists && 
      <div id="main_banner">
        <Carousel showArrows={true} showStatus={false} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={5000}>
            {heroes.map((hero, i) => {
              return (
                
                <div className="slide_background" key={hero.id} style={{
                  backgroundImage: `url(${getStrapiMedia(hero.image)})`,
                  
                  }}>
                  {/* <img src={getStrapiMedia(hero.image)} alt="Logo" /> */}
                  <p className="legend">
                    <Link key={i} href={hero.link}>
                      <a>{hero.title}</a>
                    </Link>
                  </p>
                </div>
              )
            })}
        </Carousel>
      </div>  
      }
       
        
    </div>
  )
}

export default Swiper;