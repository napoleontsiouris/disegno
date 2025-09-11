import React from "react"
import Link from "next/link"
import NextImage from "./image"


const Monuments = ({ monuments }) => {
    //console.log('monuments', monuments)
    return (

        <div className="container" >
            <div className="row" >
            {monuments && monuments.map((monument, i) => {
                return (
                <div key={i} className="col-md-6">

                    <Link key={i} href={`/monuments/${monument.attributes.slug}`}>
                    <a className="">
                        <div className="institution_box">
                            <div className="institution_box_image">
                                <NextImage style={{width:'500px',height:'300px'}} image={monument.attributes.featured} />
                            </div>
                            <div className="institution_box_title">
                                <span>
                                    {monument.attributes.name}
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

export default Monuments;
