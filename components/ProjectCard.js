import Link from "next/link";

const ProjectCard = ({inlineClass, project}) => {
    // console.log('project', project)
    // console.log('project', project)
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    // console.log('API_URL', API_URL)
    return (
        <div  key={project.id} className={inlineClass}  style={{ visibility: 'visible',  marginTop:0}} >
            <div className="blog-item">
                <div className="row" style={{ position:'relative' }}>
                    <div data-aos="fade-right" className="col-xs-12 col-md-6 col-lg-6 col-xl-6 no-padding">
                        <div className="blog-img">
                            <img src={`${process.env.NEXT_PUBLIC_API_URL}${project.image.url}`} className="img-fluid w-100" alt="" />
                        
                        </div>
                    </div>
                    <div data-aos="fade-left" data-aos-delay={400} className="col-xs-12 col-md-5 col-lg-5 col-xl-5 align-self-center">
                        <div className="blog-content rounded-bottom p-4">
                            {/* <Link className="h4 d-inline-block mb-3" href={`/projects/${project.slug}`}> */}
                            <h3>{project.title}</h3>
                            {/* </Link> */}
                            {/* <a href="#" className="h4 d-inline-block mb-3">{project.attributes.title}</a> */}
                            <div dangerouslySetInnerHTML={{ __html: project.description }} ></div> 
                        </div>
                        
                    </div>
                    <div className="disegno">Disegno</div>
                </div>
               
                { project.gallery && project.gallery.length > 0 &&
                    <div className="row">
                        { project.gallery.map((image, index) => {
                            // console.log('image', image)
                            return (
                            <div data-aos="fade-up"  data-aos-delay={index * 200}   key={index} className="col-md-3 col-lg-3 col-xl-3">
                                <img src={`${process.env.NEXT_PUBLIC_API_URL}${image.url}`} className="img-fluid w-100 project-gallery-img" alt="" />
                            </div>
                            )
                        }) }
                    </div>
                }
                
                
                
            </div>
        </div>
    )
}

export default ProjectCard;