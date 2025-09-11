import React from "react"
import Link from "next/link"
import NextImage from "./image"

const Card = ({ article }) => {
  let exists ;
  let image1 ;
  if(article.attributes.image.data == undefined){
    exists = 0;
  }
  else{
    exists = 1;
    image1 = article.attributes.image; 
  }
  return (
    <Link href={`/article/${article.attributes.slug}`}>
      <a className="card_link">
        <div className="article_box">
          <div className="article_box_image">
            {exists && <NextImage image={image1} />}
          </div>
          <div className="article_box_title">
            <p className="">
              {article.attributes.title}
            </p>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default Card
