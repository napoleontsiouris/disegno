import Link from "next/link";

const ProjectCard = ({inlineClass, project}) => {
    console.log('project', project)
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    // console.log('API_URL', API_URL)
    return (
        <div  key={project.id} className={inlineClass}  style={{ visibility: 'visible',  marginTop:0}} >
            <div className="blog-item">
                <div className="row">
                    <div data-aos="fade-up" className="col-md-6 col-lg-6 col-xl-6 no-padding">
                        <div className="blog-img">
                            <img src={`${project.attributes.main_photo.data.attributes.url}`} className="img-fluid w-100" alt="" />
                        
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay={400} className="col-md-6 col-lg-6 col-xl-6 align-self-center">
                        <div className="blog-content rounded-bottom p-4">
                            <Link className="h4 d-inline-block mb-3" href={`/projects/${project.attributes.slug}`}>
                                {project.attributes.title}
                            </Link>
                            {/* <a href="#" className="h4 d-inline-block mb-3">{project.attributes.title}</a> */}
                            <div  dangerouslySetInnerHTML={{ __html: project.attributes.description }} ></div> 
                        </div>
                    </div>
                </div>
                { project.attributes.gallery && project.attributes.gallery.length > 0 &&
                    <div className="row">
                        { project.attributes.gallery.map((image, index) => {
                            // console.log('image', image)
                            return (
                            <div data-aos="fade-up"  data-aos-delay={index * 200}   key={index} className="col-md-3 col-lg-3 col-xl-3 no-padding">
                                <img src={`${image.url}`} className="img-fluid w-100 project-gallery-img" alt="" />
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