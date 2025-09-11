import React from "react"
import Link from "next/link"
import NextImage from "./image"


const PaperCategories = ({ paperCategories }) => {
    return (

        <div className="container" >
            <div className="row" >
            {paperCategories.map((paperCategory, i) => {
                return (
                <div key={i} className="col-md-3 col-sm-6 paperCategory">

                    <Link href={paperCategory.attributes.url ?   paperCategory.attributes.url:`/paper-category/${paperCategory.attributes.slug}` } >
                    <a target = {paperCategory.attributes.url ? '_blank' : ''} className="">
                        <div className="paperCategory_box">
                            <div className="paperCategory_box_image">
                                <NextImage  style={{width:'500px',height:'680px'}} image={paperCategory.attributes.image} />
                            </div>
                            <div className="paperCategory_box_title">
                            
                                <span>
                                    {paperCategory.attributes.title}
                                </span>
                            </div>
                        </div>
                    </a>
                    </Link>
                    
                </div>
                )
            })}
            </div>
        </div>

    )
}

export default PaperCategories;
