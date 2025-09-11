import React, { useState, useEffect } from "react"
import ReactPaginate from "react-paginate"
import { useRouter } from "next/router"
import Card from "./card"

const Articles = (articlesData) => {
  const [articles, setArticles] = useState([]);
  const router = useRouter();
  useEffect(() => {
    setArticles(articlesData.articles); 
  }, [articlesData]);
  
  
  return (
    <div className="container">
      <div className="row">
        {articles.map((article, i) => {
          return (
            <div key={i} className="col-md-4">
              <Card
                article={article}
                key={`article__left__${article.attributes.slug}`}
              />
            </div>
          )
        })}

        
      </div>
    </div>
  )
}

export default Articles
