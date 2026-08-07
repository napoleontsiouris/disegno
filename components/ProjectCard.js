import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const PREVIEW_LENGTH = 180;

function stripHtml(html) {
    if (!html) return "";
    return html.replace(/<[^>]+>/g, "");
}

const ProjectCard = ({inlineClass, project}) => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const imgRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        if (imgRef.current) {
            gsap.from(imgRef.current, {
                x: -60, opacity: 0, duration: 0.8, ease: "power2.out",
                scrollTrigger: { trigger: imgRef.current, start: "top 85%" },
            });
        }
        if (contentRef.current) {
            gsap.from(contentRef.current, {
                x: 60, opacity: 0, duration: 0.8, delay: 0.2, ease: "power2.out",
                scrollTrigger: { trigger: contentRef.current, start: "top 85%" },
            });
        }
    }, []);

    const plainText = stripHtml(project.description);
    const preview = plainText.length > PREVIEW_LENGTH
        ? plainText.slice(0, PREVIEW_LENGTH).trimEnd() + "…"
        : plainText;

    return (
        <div key={project.id} className={inlineClass} style={{ visibility: 'visible', marginTop: 0 }}>
            <div className="blog-item">
                <div className="row" style={{ position: 'relative' }}>
                    <div ref={imgRef} className="col-xs-12 col-md-6 col-lg-6 col-xl-6 no-padding">
                        <div className="blog-img">
                            <img src={`${API_URL}${project.image.url}`} className="img-fluid w-100" alt={project.title} />
                        </div>
                    </div>
                    <div ref={contentRef} className="col-xs-12 col-md-5 col-lg-5 col-xl-5 align-self-center">
                        <div className="blog-content rounded-bottom p-4">
                            <Link className="text-decoration-none" href={`/classes/${project.slug}`}>
                                <h3>{project.title}</h3>
                            </Link>
                            <p className="mt-3 mb-4">{stripHtml(project.intro)}</p>
                            <Link href={`/classes/${project.slug}`} className="btn btn-primary">
                                Περισσότερα &rarr;
                            </Link>
                        </div>
                    </div>
                    <div className="disegno">Disegno</div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;